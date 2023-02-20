import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: RFValue(30),
    height: RFPercentage(8),
    justifyContent: 'center',
    width: RFPercentage(40),
  },
  text: {
    color: colors.white,
    fontSize: RFValue(14),
  },
})
