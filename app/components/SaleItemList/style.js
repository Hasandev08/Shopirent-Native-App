import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: RFValue(10),
    height: RFPercentage(30),
    marginRight: RFValue(5),
    width: RFPercentage(18),
  },
  upper: {
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: RFValue(10),
    height: RFPercentage(22),
    marginTop: 5,
    width: RFPercentage(17),
  },
  content: {
    margin: RFValue(5),
  },
  itemName: {
    color: colors.primary,
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
  itemPrice: {
    color: colors.secondary,
    fontSize: RFValue(10),
    fontWeight: 'bold',
    marginTop: 2,
  },
})
