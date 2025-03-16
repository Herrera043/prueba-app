import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Map':
                iconName = 'map';
                break;
              case 'Payments':
                iconName = 'payment';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2c3e50',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Payments" component={PaymentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;