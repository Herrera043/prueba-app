import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReservationSummary = ({ reservations }) => {
  const getTimeRemaining = (reservationTime) => {
    const endTime = new Date(reservationTime).getTime() + (15 * 60 * 1000); // 15 minutes in milliseconds
    const remaining = endTime - new Date().getTime();
    const minutes = Math.max(0, Math.floor(remaining / 60000));
    return minutes;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Reservations</Text>
      {reservations.length === 0 ? (
        <Text style={styles.noReservations}>No active reservations</Text>
      ) : (
        reservations.map(reservation => (
          <View key={reservation.id} style={styles.reservationItem}>
            <View style={styles.spotInfo}>
              <Text style={styles.spotNumber}>Spot {reservation.spotId}</Text>
              <Text style={styles.timeRemaining}>
                {getTimeRemaining(reservation.reservedAt)} minutes remaining
              </Text>
            </View>
            <Text style={styles.reservationStatus}>
              {reservation.status.toUpperCase()}
            </Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  noReservations: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
  reservationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  spotInfo: {
    flex: 1,
  },
  spotNumber: {
    fontSize: 16,
    fontWeight: '500',
  },
  timeRemaining: {
    color: '#666',
    fontSize: 14,
  },
  reservationStatus: {
    fontWeight: 'bold',
    color: '#f90',
  },
});

export default ReservationSummary;