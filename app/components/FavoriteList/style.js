import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: RFPercentage(22),
    marginTop: RFValue(10),
    width: '100%',
  },
  upper: {
    flexDirection: 'row',
    borderBottomColor: colors.background,
    borderBottomWidth: RFValue(1),
    height: RFPercentage(18),
    width: '100%',
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '85%',
  },
  right: {
    paddingTop: RFPercentage(2),
    width: '15%',
  },
  image: {
    backgroundColor: 'rgb(228,228,228)',
    borderRadius: RFValue(12),
    height: RFPercentage(15),
    marginLeft: RFPercentage(3),
    width: RFPercentage(15),
  },
  content: {
    height: RFPercentage(14),
    justifyContent: 'space-between',
    marginLeft: RFValue(10),
  },
  name: {
    color: colors.primary,
    fontSize: RFValue(15),
  },
  price: {
    color: colors.primary,
    fontSize: RFValue(16),
  },
  subContent: {
    color: colors.secondary,
    fontSize: RFValue(10),
  },
})
