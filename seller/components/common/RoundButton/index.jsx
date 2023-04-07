import React from 'react'
import { TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { styles } from './style'

const RoundButton = ({ name, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { borderColor: color }]}>
      <AntDesign name={name} size={24} color={color} />
    </TouchableOpacity>
  )
}

export default RoundButton
