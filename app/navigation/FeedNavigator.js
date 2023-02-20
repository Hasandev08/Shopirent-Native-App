import React from 'react'

import CartScreen from '../screens/CartScreen'
import HomeScreen from '../screens/HomeScreen'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Cart' component={CartScreen} />
  </Stack.Navigator>
)

export default FeedNavigator
