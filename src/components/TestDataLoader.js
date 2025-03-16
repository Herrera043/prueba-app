import React from 'react';
import { Button, View, Alert } from 'react-native';
import { db } from '../services/firebaseConfig';
import { sampleParkingSpots, samplePayments } from '../utils/testData';

const TestDataLoader = () => {
  const loadTestData = async () => {
    try {
      // Load parking spots
      for (const spot of sampleParkingSpots) {
        await db.collection('parkingSpots').doc(spot.id).set(spot);
      }

      // Load payments
      for (const payment of samplePayments) {
        await db.collection('transactions').doc(payment.id).set(payment);
      }

      Alert.alert('Success', 'Test data loaded successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to load test data');
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Button title="Load Test Data" onPress={loadTestData} />
    </View>
  );
};

export default TestDataLoader;