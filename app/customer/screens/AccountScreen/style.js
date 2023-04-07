import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: RFPercentage(3),
  },
  personal: {
    alignItems: 'center',
    height: RFPercentage(27),
    marginBottom: RFValue(15),
    justifyContent: 'space-between',
  },
  profile: {
    borderColor: colors.primary,
    borderRadius: 40,
    borderWidth: RFValue(3),
    height: RFValue(70),
    marginTop: RFPercentage(8),
    width: RFValue(70),
  },
  name: {
    color: colors.primary,
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  email: {
    color: colors.secondary,
    fontSize: RFValue(10),
  },
})
