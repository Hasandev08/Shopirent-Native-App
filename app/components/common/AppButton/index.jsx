import React from 'react'

import { Text, TouchableOpacity } from 'react-native'

import { styles } from './style'

const AppButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton
