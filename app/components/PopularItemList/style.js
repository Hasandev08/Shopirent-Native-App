import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: RFValue(10),
  },
  image: {
    backgroundColor: colors.white,
    borderRadius: RFValue(10),
    height: RFPercentage(20),
    width: RFPercentage(12),
  },
  details: {
    backgroundColor: colors.white,
    borderTopRightRadius: RFValue(10),
    borderBottomRightRadius: RFValue(10),
    elevation: 2,
    height: RFPercentage(16),
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 15,
    width: RFPercentage(30),
  },
  left: {
    justifyContent: 'center',
    width: RFPercentage(20),
  },
  title: {
    color: colors.primary,
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  price: {
    color: colors.secondary,
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
  rating: {
    color: colors.primary,
    fontSize: RFValue(13),
  },
  right: {
    justifyContent: 'center',
  },
})
