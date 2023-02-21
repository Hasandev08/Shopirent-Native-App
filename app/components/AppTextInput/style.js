import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: RFValue(22),
    height: RFPercentage(8),
    marginHorizontal: RFPercentage(4),
    marginVertical: RFPercentage(1),
    width: '85%',
  },
  textInput: {
    color: colors.primary,
    fontSize: RFValue(12),
    height: RFPercentage(8),
    paddingLeft: RFPercentage(2),
    width: '100%',
  },
})
