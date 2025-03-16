import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { db } from '../services/firebaseConfig';
import { parkingService } from '../services/parkingService';

const PaymentScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const transactionsSnapshot = await db.collection('transactions').orderBy('date', 'desc').get();
      const transactionsData = transactionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTransactions(transactionsData);
      calculateTotal(transactionsData);
    } catch (error) {
      Alert.alert('Error', 'Failed to load transactions');
    }
  };

  const calculateTotal = (transactionsData) => {
    const total = transactionsData.reduce((sum, transaction) => sum + transaction.amount, 0);
    setTotalAmount(total);
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.amount}>$ {item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.title}>Payment History</Text>
        <Text style={styles.totalAmount}>Total: $ {totalAmount}</Text>
      </View>
      
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  summary: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    color: '#666',
    marginTop: 8,
  },
  list: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  date: {
    flex: 1,
  },
  description: {
    flex: 2,
  },
  amount: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;