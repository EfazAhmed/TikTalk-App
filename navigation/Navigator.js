import React from 'react';
import SoundScreen from './screens/SoundScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import CreatorScreen from './screens/CreatorScreen'
import AudioScreen from './screens/AudioScreen'

const Tab = createBottomTabNavigator();

export default function Navigator() {
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
            else if (route.name === 'Audio') {
                iconName = focused
                ? 'play'
                : 'playcircleo';
                return <AntDesign name={iconName} size={size} color={color} />;
  
              }
          },
          tabBarActiveTintColor: '#FE2C55',
          tabBarInactiveTintColor: '#FE2C55',
          tabBarShowLabel: false
        })}
      >
        <Tab.Screen name="Sounds" component={SoundScreen}
        options={{headerShown: false}} />
        <Tab.Screen name="Audio" component={AudioScreen}
        options={{headerShown: false}} />
        <Tab.Screen name="Creators" component={CreatorScreen}
        options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}