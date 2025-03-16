import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PaymentHistory = ({ payments }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Payments</Text>
      <ScrollView style={styles.scrollView}>
        {payments.length === 0 ? (
          <Text style={styles.noPayments}>No recent payments</Text>
        ) : (
          payments.map(payment => (
            <View key={payment.id} style={styles.paymentItem}>
              <View style={styles.paymentInfo}>
                <Text style={styles.date}>{formatDate(payment.timestamp)}</Text>
                <Text style={styles.description}>
                  {payment.type === 'reservation' ? 'Reservation Fee' : 'Parking Fee'}
                </Text>
              </View>
              <Text style={styles.amount}>$ {payment.amount}</Text>
            </View>
          ))
        )}
      </ScrollView>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  scrollView: {
    maxHeight: 200,
  },
  noPayments: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    padding: 16,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  paymentInfo: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 16,
    marginTop: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});

export default PaymentHistory;