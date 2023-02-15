import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.white,
    borderRadius: 25,
    height: RFValue(32),
    marginTop: RFValue(2),
    padding: RFValue(8),
  },
})
