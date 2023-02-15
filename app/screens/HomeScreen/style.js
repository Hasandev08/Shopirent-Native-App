import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  homeContainer: {
    marginHorizontal: RFPercentage(3),
  },
  homeHeading: {
    color: 'rgb(122, 141, 156)',
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginVertical: RFPercentage(3),
  },
})
