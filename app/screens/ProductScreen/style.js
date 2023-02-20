import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 0.5,
  },
  lower: {
    backgroundColor: colors.white,
    borderTopLeftRadius: RFValue(18),
    borderTopRightRadius: RFValue(18),
    elevation: 10,
    flex: 0.5,
    justifyContent: 'space-between',
    padding: RFPercentage(3),
  },
  productImage: {
    height: '100%',
    width: '100%',
  },
  common: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: RFPercentage(20),
  },
})
