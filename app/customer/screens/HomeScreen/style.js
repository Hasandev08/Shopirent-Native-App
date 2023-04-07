import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RFPercentage(1.5),
  },
  homeContainer: {
    flex: 1,
    marginHorizontal: RFPercentage(3),
  },
  heading: {
    color: colors.secondary,
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginBottom: RFPercentage(1.5),
  },
  homeHeading: {
    color: colors.secondary,
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginVertical: RFPercentage(1.5),
  },
})
