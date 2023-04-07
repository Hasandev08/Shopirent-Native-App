import React from 'react'

import ApprovalScreen from '../screens/ApprovalScreen'
import ReturnScreen from '../screens/ReturnScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import colors from '../../config/colors'

import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const TabSellerNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Approvals' screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Approvals'
        component={ApprovalScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name='approval' color={colors.primary} size={32} />,
        }}
      />
      <Tab.Screen
        name='Return'
        component={ReturnScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name='pending' color={colors.primary} size={32} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabSellerNavigator
