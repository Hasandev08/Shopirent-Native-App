import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

export const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: RFPercentage(3),
    marginTop: RFPercentage(1),
  },
  component: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: RFPercentage(12),
    opacity: 0.6,
    justifyContent: 'space-around',
  },
  image: {
    borderRadius: RFValue(10),
    height: RFPercentage(35),
    width: RFPercentage(20),
  },
  image1: {
    borderRadius: RFValue(10),
    height: RFPercentage(28),
    width: RFPercentage(18),
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: RFValue(5),
  },
})
