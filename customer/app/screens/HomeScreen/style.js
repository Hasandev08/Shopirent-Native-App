import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  bar: {
    marginTop: RFPercentage(1.5),
  },
  barText: {
    color: colors.secondary,
    fontSize: RFValue(10),
  },
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
