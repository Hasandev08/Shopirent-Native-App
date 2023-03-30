import { StyleSheet } from 'react-native'

import { RFPercentage } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.red,
    justifyContent: 'center',
    width: RFPercentage(8),
  },
})
