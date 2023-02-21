import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.75,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: RFValue(25),
    borderTopRightRadius: RFValue(25),
    elevation: 20,
    flex: 0.25,
    justifyContent: 'center',
  },
})
