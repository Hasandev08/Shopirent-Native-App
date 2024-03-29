import React from 'react'

import { Text, TouchableWithoutFeedback, View } from 'react-native'

import colors from '../../../config/colors'

import { styles } from './style'

const SizeButton = ({ size, setSize }) => {
  return (
    <>
      {['S', 'M', 'L', 'XL'].map((item) => (
        <TouchableWithoutFeedback
          key={item}
          onPress={() => {
            setSize(item)
          }}
        >
          <View style={item === size ? styles.sizeOn : styles.size}>
            <Text style={{ color: item === size ? colors.white : colors.primary, fontSize: 14 }}>
              {item}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </>
  )
}

export default SizeButton
