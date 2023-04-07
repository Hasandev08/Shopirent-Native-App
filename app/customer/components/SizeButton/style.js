import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  size: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: RFValue(5),
    height: RFPercentage(4),
    justifyContent: 'center',
    width: RFPercentage(4),
  },
  sizeOn: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: RFValue(5),
    height: RFPercentage(4),
    justifyContent: 'center',
    width: RFPercentage(4),
  },
})
