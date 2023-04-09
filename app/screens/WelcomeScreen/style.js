import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'space-around',
    marginVertical: RFPercentage(20),
  },
  text: {
    alignItems: 'center',
    height: RFPercentage(10),
    justifyContent: 'space-around',
  },
  welcome: {
    color: colors.white,
    fontSize: RFValue(28),
    fontWeight: 'bold',
  },
  tag: {
    color: colors.white,
    fontSize: RFValue(10),
  },
  footer: {
    alignItems: 'center',
    height: RFPercentage(12),
    justifyContent: 'space-between',
  },
  footerTag: {
    color: colors.white,
    fontSize: RFValue(10),
  },
})
