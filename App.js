import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SoundScreen from './navigation/screens/SoundScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CreatorScreen from './navigation/screens/CreatorScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Sounds') {
              iconName = focused
              ? 'music-circle'
              : 'music-circle-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            }
            else if (route.name === 'Creators') {
              iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
              return <Ionicons name={iconName} size={size} color={color} />;

            }
          },
          tabBarActiveTintColor: '#FE2C55',
          tabBarInactiveTintColor: '#FE2C55',
        })}
      >
        <Tab.Screen name="Sounds" component={SoundScreen}
        options={{headerShown: false}} />
        <Tab.Screen name="Creators" component={CreatorScreen}
        options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


