import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: RFPercentage(22),
    marginTop: RFValue(10),
    width: '100%',
  },
  upper: {
    alignItems: 'center',
    borderBottomColor: colors.background,
    borderBottomWidth: RFValue(1),
    flexDirection: 'row',
    height: RFPercentage(18),
    width: '100%',
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
  upperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: RFPercentage(27),
  },
  details: {
    height: RFPercentage(10),
    justifyContent: 'space-between',
  },
  name: {
    color: colors.primary,
    fontSize: RFValue(15),
  },
  subContent: {
    color: colors.secondary,
    fontSize: RFValue(10),
  },
  checkoutButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: RFValue(10),
    height: RFPercentage(4),
    justifyContent: 'center',
    width: RFPercentage(10),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
  },
  price: {
    color: colors.primary,
    fontSize: RFValue(16),
  },
  quantity: {
    alignSelf: 'flex-end',
    color: colors.secondary,
    fontSize: RFValue(16),
    paddingRight: RFPercentage(5),
  },
  lower: {
    alignItems: 'center',
    flexDirection: 'row',
    height: RFPercentage(4),
    justifyContent: 'space-between',
    marginLeft: RFPercentage(27),
    width: RFPercentage(18),
  },
})
