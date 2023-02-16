import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import TabNavigator from './app/navigation/TabNavigator'

import { NavigationContainer } from '@react-navigation/native'

import navigationTheme from './app/navigation/navigationTheme'
import colors from './app/config/colors'

export default function App() {
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
