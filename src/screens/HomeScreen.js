import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ReservationSummary from '../components/ReservationSummary';
import PaymentHistory from '../components/PaymentHistory';
import TestDataLoader from '../components/TestDataLoader';

const HomeScreen = () => {
  const [activeReservations, setActiveReservations] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);

  useEffect(() => {
    // Fetch active reservations and recent payments from Firebase
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    // Implement Firebase data fetching
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EstacionaloSmart</Text>
      <TestDataLoader /> {/* Add this line for testing */}
      <ReservationSummary reservations={activeReservations} />
      <PaymentHistory payments={recentPayments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;