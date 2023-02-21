import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  upper: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: RFValue(30),
    borderBottomRightRadius: RFValue(30),
    flex: 0.4,
    justifyContent: 'center',
  },
  signup: {
    color: colors.white,
    fontSize: RFValue(16),
    fontWeight: '500',
  },
  heading: {
    color: colors.white,
    fontSize: RFValue(26),
    fontWeight: '400',
    marginLeft: RFPercentage(3),
    marginTop: RFPercentage(8),
  },
  para: {
    color: colors.white,
    fontSize: RFValue(10),
    marginLeft: RFPercentage(3),
    marginTop: RFPercentage(1),
  },
  components: {
    flex: 0.6,
    marginTop: RFPercentage(5),
  },
  row: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
  },
  phrase: {
    fontSize: RFValue(10),
    color: colors.red,
    marginVertical: RFPercentage(3),
  },
  loginButton: {
    alignItems: 'center',
  },
})
