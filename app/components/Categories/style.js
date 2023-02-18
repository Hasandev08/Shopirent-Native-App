import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: RFValue(10),
    height: RFValue(70),
    width: RFValue(70),
  },
  categoryName: {
    color: colors.primary,
    marginTop: RFValue(5),
    textAlign: 'center',
    width: RFValue(68),
  },
})
