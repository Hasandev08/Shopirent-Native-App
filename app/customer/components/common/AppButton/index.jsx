import React from 'react'

import { Text, TouchableOpacity } from 'react-native'

import { styles } from './style'

const AppButton = ({ title, onPress, buttonDisable }) => {
  return (
    <>
      {buttonDisable ? (
        <TouchableOpacity style={styles.disableButton} onPress={onPress} disabled>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  )
}

export default AppButton
