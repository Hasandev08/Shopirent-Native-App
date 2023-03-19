import React from 'react'

import AccountScreen from '../screens/AccountScreen'
import SearchScreen from '../screens/SearchScreen'

import SearchButton from '../components/SearchButton'

import colors from '../config/colors'
import FeedNavigator from './FeedNavigator'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator initialRouteName='FeedNavigator' screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name='FeedNavigator'
      component={FeedNavigator}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name='home' color={colors.primary} size={32} />,
        tabBarLabel: () => {
          return null
        },
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchScreen}
      options={({ navigation }) => ({
        tabBarButton: () => <SearchButton onPress={() => navigation.navigate('Search')} />,
        tabBarLabel: () => {
          return null
        },
      })}
    />
    <Tab.Screen
      name='Account'
      component={AccountScreen}
      options={{
        tabBarIcon: () => <MaterialIcons name='account-circle' color={colors.primary} size={36} />,
        tabBarLabel: () => {
          return null
        },
      }}
    />
  </Tab.Navigator>
)

export default TabNavigator
