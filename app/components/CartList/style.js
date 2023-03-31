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
  name: {
    color: colors.primary,
    fontSize: RFValue(15),
  },
  subContent: {
    color: colors.secondary,
    fontSize: RFValue(10),
  },
  price: {
    color: colors.primary,
    fontSize: RFValue(16),
  },
  quantity: {
    alignSelf: 'flex-end',
    color: colors.red,
    fontSize: RFValue(16),
    paddingRight: RFPercentage(5),
  },
})
