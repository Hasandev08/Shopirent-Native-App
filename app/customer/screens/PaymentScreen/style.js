import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.75,
  },
  description: {
    backgroundColor: colors.white,
    height: RFPercentage(20),
    marginTop: RFPercentage(2),
    paddingHorizontal: RFPercentage(3),
  },
  descriptionHeading: {
    color: colors.primary,
    marginVertical: RFPercentage(1),
  },
  textInput: {
    borderColor: 'rgb(87, 99, 111)',
    borderRadius: RFValue(12),
    borderWidth: RFValue(1),
    // height: RFPercentage(12),
    padding: RFPercentage(1),
  },
  footer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: RFValue(25),
    borderTopRightRadius: RFValue(25),
    elevation: 20,
    flex: 0.25,
    justifyContent: 'space-around',
    marginTop: RFPercentage(1),
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(3),
    width: '100%',
  },
  totalText: {
    color: colors.secondary,
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  totalPrice: {
    color: 'rgb(228, 18, 107)',
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
})
