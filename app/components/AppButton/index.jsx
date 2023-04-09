import React from 'react'

import { Text, TouchableOpacity } from 'react-native'

import colors from '../../config/colors'
import { styles } from './style'

const AppButton = ({
  title,
  onPress,
  buttonDisable,
  buttonColor = colors.primary,
  textColor = colors.white,
}) => {
  return (
    <>
      {buttonDisable ? (
        <TouchableOpacity
          style={[styles.disableButton, { backgroundColor: buttonColor }]}
          onPress={onPress}
          disabled
        >
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={onPress}
        >
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  )
}

export default AppButton
