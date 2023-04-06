import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  components: {
    flex: 0.6,
    marginTop: RFPercentage(5),
  },
  row: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
  },
  phrase: {
    fontSize: RFValue(10),
    color: colors.red,
    marginVertical: RFPercentage(3),
  },
  loginButton: {
    alignItems: 'center',
  },
})
