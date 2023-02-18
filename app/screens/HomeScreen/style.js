import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginHorizontal: RFPercentage(3),
  },
  homeHeading: {
    color: colors.secondary,
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginVertical: RFPercentage(1.5),
  },
})
