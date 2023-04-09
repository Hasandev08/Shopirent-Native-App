import React from 'react'

import Customer from '../customer'
import Seller from '../seller'

import ForgotPassword from '../screens/ForgotPassword'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const FeedMainNavigator = () => (
  <Stack.Navigator initialRouteName='Welcome'>
    <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Signup' component={SignUpScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name='ForgotPassword'
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Customer' component={Customer} options={{ headerShown: false }} />
    <Stack.Screen name='Seller' component={Seller} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default FeedMainNavigator
