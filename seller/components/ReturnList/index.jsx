import React from 'react'
import { Text, View } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import { styles } from './style'

const ReturnList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={styles.upper}>
          <View style={styles.left}>
            <Text style={styles.name}>Hello</Text>
            <Text style={styles.subContent}>Color: Dark Grey</Text>
            <Text style={styles.subContent}>Size: L</Text>
            <Text style={styles.subContent}>x1</Text>
            <Text style={styles.price}>1000/-</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.name}>Hasan</Text>
            <Text style={styles.subContent}>Address</Text>
            <Text style={styles.subContent}>03153260203</Text>
            <Text style={styles.subContent}>From: 4/7/2023</Text>
            <Text style={styles.subContent}>To: 4/7/2023</Text>
          </View>
        </View>
      </View>
      <View style={styles.lower}>
        <Entypo name='back-in-time' size={18} color='rgb(253, 218, 13)' />
        <Text style={styles.pending}>Pending</Text>
      </View>
    </View>
  )
}

export default ReturnList
