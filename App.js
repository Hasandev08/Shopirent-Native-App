import { useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import TabNavigator from './app/navigation/TabNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import colors from './app/config/colors'

import * as ImagePicker from 'expo-image-picker'

import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync()
  //   if (!granted) alert('Enable the permission to access the camera')
  // }

  // useEffect(() => {
  //   requestPermission()
  // }, [])

  return (
    <View style={styles.background}>
      <NavigationContainer theme={navigationTheme}>
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
