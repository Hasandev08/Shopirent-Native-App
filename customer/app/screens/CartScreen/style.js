import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  list: {
    flex: 0.75,
    marginBottom: RFPercentage(1),
  },
  deleteButton: {
    alignSelf: 'flex-end',
    color: colors.secondary,
    fontSize: RFValue(14),
    fontWeight: 'bold',
    opacity: 0.8,
    paddingRight: RFPercentage(3),
    textDecorationLine: 'underline',
  },
  checkOut: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: RFValue(15),
    borderTopRightRadius: RFValue(15),
    elevation: 10,
    flex: 0.25,
    justifyContent: 'center',
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFPercentage(1.5),
    width: RFPercentage(42),
  },
  header: {
    color: colors.primary,
    fontSize: RFValue(14),
  },
  price: {
    color: colors.red,
    fontSize: RFValue(18),
  },
})
