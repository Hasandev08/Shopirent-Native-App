import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import FeedMainNavigator from './app/navigation/FeedMainNavigator'
import { NavigationContainer } from '@react-navigation/native'

import colors from './app/config/colors'

export default function App() {
  return (
    <View style={styles.background}>
      <NavigationContainer>
        <FeedMainNavigator />
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
