import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import colors from '../../../../config/colors'

import { styles } from './style'

const CounterButton = ({ count, setCount }) => {
  const addCount = (val) => {
    val += 1
    setCount(val)
  }

  const minusCount = (val) => {
    if (val > 1) {
      val -= 1
      setCount(val)
    }
  }

  return (
    <View style={styles.counter}>
      {count === 1 ? (
        <TouchableOpacity style={styles.button} onPress={() => minusCount(count)} disabled>
          <AntDesign name='minus' size={18} color={colors.secondary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => minusCount(count)}>
          <AntDesign name='minus' size={18} color={colors.secondary} />
        </TouchableOpacity>
      )}
      <View style={styles.number}>
        <Text style={{ color: colors.secondary }}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => addCount(count)}>
        <AntDesign name='plus' size={18} color={colors.secondary} />
      </TouchableOpacity>
    </View>
  )
}

export default CounterButton
