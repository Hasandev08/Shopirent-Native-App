import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  listBackground: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: RFPercentage(10),
    marginTop: RFPercentage(2),
    justifyContent: 'space-around',
    width: '100%',
  },
  image: {
    backgroundColor: 'rgb(228,228,228)',
    borderRadius: RFValue(8),
    height: RFPercentage(8),
    marginLeft: RFPercentage(3),
    width: RFPercentage(10),
  },
  content: {
    height: '90%',
    marginRight: RFPercentage(3),
    justifyContent: 'space-around',
    width: RFPercentage(30),
  },
  primary: {
    color: colors.primary,
    fontSize: RFValue(13),
    fontWeight: '500',
  },
  subContent: {
    flexDirection: 'row',
  },
  contentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
