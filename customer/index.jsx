import { StyleSheet, View } from 'react-native'

import TabNavigator from './app/navigation/TabNavigator'
import navigationTheme from './app/navigation/navigationTheme'

import { NavigationContainer } from '@react-navigation/native'

export default function Customer() {
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
    flex: 1,
  },
})
