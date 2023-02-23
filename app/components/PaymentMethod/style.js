import { StyleSheet } from 'react-native'

import { RFPercentage } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: RFPercentage(15),
    marginTop: RFPercentage(2),
    width: '100%',
  },
  header: {
    borderBottomColor: colors.background,
    height: RFPercentage(5),
    width: '100%',
  },
})
