import React from 'react'
import { TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { styles } from './style'

const RoundButton = ({ name, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { borderColor: color }]} onPress={onPress}>
      <AntDesign name={name} size={24} color={color} />
    </TouchableOpacity>
  )
}

export default RoundButton
