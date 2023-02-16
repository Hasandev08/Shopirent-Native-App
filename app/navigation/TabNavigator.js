import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from '../screens/AccountScreen'
import HomeScreen from '../screens/HomeScreen'
import NotificationScreen from '../screens/CartScreen'

import CartButton from '../components/CartButton'

import colors from '../config/colors'

import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator initialRouteName='Home'>
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => <MaterialCommunityIcons name='home' color={colors.primary} size={32} />,
        tabBarLabel: () => {
          return null
        },
      }}
    />
    <Tab.Screen
      name='Notifications'
      component={NotificationScreen}
      options={{
        headerShown: false,
        tabBarButton: () => <CartButton />,
        tabBarIcon: () => <AntDesign name='shoppingcart' size={32} color={colors.white} />,
        tabBarLabel: () => {
          return null
        },
      }}
    />
    <Tab.Screen
      name='Account'
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => <MaterialCommunityIcons name='home' color={colors.primary} size={32} />,
        tabBarLabel: () => {
          return null
        },
      }}
    />
  </Tab.Navigator>
)

export default TabNavigator
