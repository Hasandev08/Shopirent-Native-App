import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 80,
  },
  components: {
    flex: 0.6,
    marginTop: RFPercentage(5),
  },
  signupButton: {
    alignItems: 'center',
    marginBottom: RFPercentage(4),
    marginTop: 15,
  },
})
