import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../../customer/app/config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: RFPercentage(25),
    marginTop: RFValue(10),
    width: '100%',
  },
  upper: {
    alignItems: 'center',
    borderBottomColor: colors.background,
    borderBottomWidth: RFValue(1),
    flexDirection: 'row',
    height: RFPercentage(18),
    justifyContent: 'space-around',
    width: '70%',
  },
  left: {
    height: RFPercentage(14),
    justifyContent: 'space-between',
  },
  right: {
    height: RFPercentage(14),
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
    height: RFPercentage(7),
    justifyContent: 'space-between',
    marginLeft: RFPercentage(30),
    width: RFPercentage(15),
  },
  approved: {
    color: 'green',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginLeft: RFPercentage(5),
  },
})
