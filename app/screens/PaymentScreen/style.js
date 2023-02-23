import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.75,
  },
  description: {
    backgroundColor: colors.white,
    height: RFPercentage(20),
    justifyContent: 'space-around',
    marginTop: RFPercentage(2),
    paddingHorizontal: RFPercentage(3),
  },
  descriptionHeading: {
    color: colors.primary,
  },
  textInput: {
    borderColor: 'rgb(87, 99, 111)',
    borderRadius: RFValue(12),
    borderWidth: RFValue(1),
    marginBottom: RFPercentage(1),
    paddingBottom: RFPercentage(2),
    paddingLeft: RFPercentage(1),
  },
  footer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: RFValue(25),
    borderTopRightRadius: RFValue(25),
    elevation: 20,
    flex: 0.25,
    marginTop: RFPercentage(2),
    justifyContent: 'center',
  },
})
