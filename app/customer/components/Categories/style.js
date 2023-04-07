import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: RFValue(10),
    elevation: 2,
    height: RFValue(70),
    justifyContent: 'center',
    width: RFValue(70),
  },
  categoryName: {
    color: colors.primary,
    marginTop: RFValue(5),
    textAlign: 'center',
    width: RFValue(68),
  },
})
