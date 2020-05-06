import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './screens/Explore'
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View } from 'react-native'



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: '#000',
          style: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 5,
            
          }
        }}>
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color}  size={size}  />
            ),
          }}
        />
        <Tab.Screen name="Saved" component={Saved}
          options={{
            tabBarLabel: 'Saved',

            tabBarIcon: ({ color, size }) => (
              <Icon name="bookmark" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Trips" component={Trips}
          options={{
            tabBarLabel: 'Trips',

            tabBarIcon: ({ color, size }) => (
              <Icon name="watch" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Inbox" component={Inbox} 
          options={{
            tabBarLabel: 'Inbox',

            tabBarIcon: ({ color, size }) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
