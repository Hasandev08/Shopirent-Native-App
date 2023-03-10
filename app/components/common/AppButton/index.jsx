import React from 'react'

import { Text, TouchableOpacity } from 'react-native'

import { styles } from './style'

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton
