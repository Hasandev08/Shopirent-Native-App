import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: RFValue(10),
    elevation: 2,
    flexDirection: 'row',
    height: RFPercentage(8),
    marginVertical: RFValue(7.5),
    width: RFPercentage(42),
  },
  title: {
    color: colors.secondary,
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
})
