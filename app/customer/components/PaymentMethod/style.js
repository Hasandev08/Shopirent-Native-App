import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: RFPercentage(15),
    marginTop: RFPercentage(2),
    width: '100%',
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
  footer: {
    height: RFPercentage(10),
    justifyContent: 'space-around',
    paddingVertical: RFPercentage(1),
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: RFPercentage(2),
  },
})
