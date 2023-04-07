import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../../../config/colors'

export const styles = StyleSheet.create({
  counter: {
    borderColor: colors.primary,
    borderRadius: RFValue(5),
    borderWidth: RFValue(1),
    flexDirection: 'row',
    height: RFPercentage(3.5),
    width: RFPercentage(16),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: RFPercentage(4),
  },
  number: {
    alignItems: 'center',
    borderLeftColor: colors.primary,
    borderLeftWidth: RFValue(1),
    borderRightColor: colors.primary,
    borderRightWidth: RFValue(1),
    justifyContent: 'center',
    width: RFPercentage(8),
  },
})
