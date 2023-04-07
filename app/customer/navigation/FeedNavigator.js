import React from 'react'

import CartScreen from '../screens/CartScreen'
import CategoryScreen from '../screens/CategoryScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import HomeScreen from '../screens/HomeScreen'
import OrderScreen from '../screens/OrderScreen'
import PaymentScreen from '../screens/PaymentScreen'
import ProductScreen from '../screens/ProductScreen'

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
      name='FavoritesScreen'
      component={FavoritesScreen}
      options={{
        title: 'My Favorites',
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
      name='OrderScreen'
      component={OrderScreen}
      options={{
        title: 'My Orders',
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
    {/* <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{ headerShown: false }}
      /> */}
  </Stack.Navigator>
)

export default FeedNavigator
