import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colors.primary,
    borderRadius: 40,
    borderWidth: RFValue(3),
    height: RFValue(70),
    justifyContent: 'center',
    marginTop: RFPercentage(8),
    width: RFValue(70),
  },
  image: {
    borderColor: colors.primary,
    borderRadius: 40,
    borderWidth: RFValue(3),
    height: RFValue(70),
    width: RFValue(70),
  },
})
