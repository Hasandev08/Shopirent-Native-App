import { StyleSheet, View } from 'react-native'

import TabSellerNavigator from './navigation/TabSellerNavigator'
import navigationTheme from '../customer/app/navigation/navigationTheme'

import { NavigationContainer } from '@react-navigation/native'

export default function Seller() {
  return (
    <View style={styles.background}>
      <NavigationContainer theme={navigationTheme}>
        <TabSellerNavigator />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
})
