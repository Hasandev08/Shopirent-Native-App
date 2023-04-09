import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: RFValue(30),
    height: RFPercentage(8),
    justifyContent: 'center',
    width: RFPercentage(40),
  },
  disableButton: {
    alignItems: 'center',
    borderRadius: RFValue(30),
    height: RFPercentage(8),
    justifyContent: 'center',
    opacity: 0.7,
    width: RFPercentage(40),
  },
  text: {
    fontSize: RFValue(14),
  },
})
