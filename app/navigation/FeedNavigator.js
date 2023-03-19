import React from 'react'

import CartScreen from '../screens/CartScreen'
import CategoryScreen from '../screens/CategoryScreen'
import ForgotPassword from '../screens/ForgotPassword'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import PaymentScreen from '../screens/PaymentScreen'
import ProductScreen from '../screens/ProductScreen'
import SignUpScreen from '../screens/SignUpScreen'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name='CategoryScreen'
      component={CategoryScreen}
      options={{ headerShown: false }}
    />
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
    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Signup' component={SignUpScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name='ForgotPassword'
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='Payment'
      component={PaymentScreen}
      options={{
        title: 'Payments',
        headerStyle: {
          backgroundColor: 'rgb(246, 246, 247)',
        },
        headerTintColor: 'rgb(49, 78, 82)',
        headerTitleStyle: {
          color: 'rgb(49, 78, 82)',
        },
      }}
    />
  </Stack.Navigator>
)

export default FeedNavigator
