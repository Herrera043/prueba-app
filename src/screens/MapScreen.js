import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ParkingSpot from '../components/ParkingSpot';
import { db } from '../services/firebaseConfig';

const MapScreen = () => {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const initialRegion = {
    latitude: -34.6037,  // Example coordinates for Buenos Aires
    longitude: -58.3816,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    fetchParkingSpots();
  }, []);

  const fetchParkingSpots = async () => {
    try {
      const spotsSnapshot = await db.collection('parkingSpots').get();
      const spots = spotsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setParkingSpots(spots);
    } catch (error) {
      Alert.alert('Error', 'Failed to load parking spots');
    }
  };

  const handleSpotPress = (spot) => {
    if (spot.status === 'available') {
      setSelectedSpot(spot);
      Alert.alert(
        'Reserve Spot',
        'Would you like to reserve this spot for 15 minutes? Cost: $200',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Reserve', onPress: () => reserveSpot(spot) }
        ]
      );
    }
  };

  const reserveSpot = async (spot) => {
    try {
      await db.collection('parkingSpots').doc(spot.id).update({
        status: 'reserved',
        reservedAt: new Date().toISOString(),
      });
      fetchParkingSpots(); // Refresh spots
    } catch (error) {
      Alert.alert('Error', 'Failed to reserve spot');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {parkingSpots.map(spot => (
          <ParkingSpot
            key={spot.id}
            spot={spot}
            onPress={() => handleSpotPress(spot)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;