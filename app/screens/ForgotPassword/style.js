import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  component: {
    alignItems: 'center',
    flex: 0.6,
    marginTop: RFPercentage(3),
  },
  header: {
    marginTop: 80,
    color: colors.black,
    fontSize: RFValue(18),
  },
  submit: {
    alignItems: 'center',
    marginTop: RFPercentage(3),
  },
})
