import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  address: {
    backgroundColor: colors.white,
    height: RFPercentage(25),
    marginTop: RFPercentage(2),
  },
  header: {
    alignItems: 'center',
    borderBottomColor: colors.background,
    borderBottomWidth: RFValue(1),
    height: RFPercentage(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(4),
    width: '100%',
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: RFPercentage(18),
  },
  details: {
    height: RFPercentage(17),
    justifyContent: 'space-around',
    marginLeft: RFPercentage(5),
  },
  name: {
    color: colors.primary,
    fontSize: RFValue(20),
  },
  subAddress: {
    height: RFPercentage(10),
    justifyContent: 'space-between',
  },
})
