import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  upper: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: RFValue(30),
    borderBottomRightRadius: RFValue(30),
    flex: 0.4,
    justifyContent: 'center',
  },
  subTitle: {
    color: colors.white,
    fontSize: RFValue(16),
    fontWeight: '500',
  },
  title: {
    color: colors.white,
    fontSize: RFValue(26),
    fontWeight: '400',
    marginLeft: RFPercentage(3),
    marginTop: RFPercentage(8),
  },
  para: {
    color: colors.white,
    fontSize: RFValue(10),
    marginLeft: RFPercentage(3),
    marginTop: RFPercentage(1),
    width: RFPercentage(40),
  },
})
