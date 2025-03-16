import React from 'react';
import { Marker } from 'react-native-maps';

const ParkingSpot = ({ spot, onPress }) => {
  const getSpotColor = () => {
    switch (spot.status) {
      case 'available':
        return 'green';
      case 'reserved':
        return 'yellow';
      case 'occupied':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Marker
      coordinate={{
        latitude: spot.latitude,
        longitude: spot.longitude,
      }}
      pinColor={getSpotColor()}
      onPress={() => onPress(spot)}
      title={`Spot ${spot.id}`}
      description={`Status: ${spot.status}`}
    />
  );
};

export default ParkingSpot;