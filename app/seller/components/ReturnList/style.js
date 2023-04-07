import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: RFPercentage(27),
    marginTop: RFValue(10),
    width: '100%',
  },
  border: {
    borderBottomColor: colors.background,
    borderBottomWidth: RFValue(1),
  },
  upper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: RFPercentage(20),
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
    justifyContent: 'space-around',
    marginLeft: RFPercentage(30),
    width: '20%',
  },
  pending: {
    color: 'rgb(253, 218, 13)',
  },
})
