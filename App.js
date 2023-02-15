import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './app/screens/HomeScreen'

import colors from './app/config/colors'

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='HomeScreen' component={HomeScreen} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <View style={styles.background}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
