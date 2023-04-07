import { StyleSheet, View } from 'react-native'

import TabNavigator from '../customer/navigation/TabNavigator'

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
      <TabNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
})
