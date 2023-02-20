import React from 'react'

import CartScreen from '../screens/CartScreen'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name='Cart'
      component={CartScreen}
      options={{
        title: 'My Cart',
        headerStyle: {
          backgroundColor: 'rgb(246, 246, 247)',
        },
        headerTintColor: 'rgb(49, 78, 82)',
        headerTitleStyle: {
          color: 'rgb(49, 78, 82)',
        },
      }}
    />
    <Stack.Screen
      name='Product'
      component={ProductScreen}
      options={{
        title: ' ',
        headerStyle: {
          backgroundColor: 'rgb(246, 246, 247)',
        },
        headerTintColor: 'rgb(49, 78, 82)',
      }}
    />
  </Stack.Navigator>
)

export default FeedNavigator
