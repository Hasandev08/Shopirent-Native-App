import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: RFPercentage(50),
    borderWidth: RFValue(1),
    height: RFPercentage(5),
    justifyContent: 'center',
    width: RFPercentage(5),
  },
})
