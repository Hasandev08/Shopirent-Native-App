import React from 'react'
import { Text, View } from 'react-native'

import RoundButton from '../common/RoundButton'

import { styles } from './style'

const ApprovalList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        {/* <Image source={item.image} style={styles.image} resizeMode='contain' /> */}
        <View style={styles.image}></View>
        <View style={styles.content}>
          <Text style={styles.name}>Hello</Text>
          <Text style={styles.subContent}>Color: Dark Grey</Text>
          <Text style={styles.subContent}>Size: L</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>1000/-</Text>
            <Text style={styles.quantity}>x1</Text>
          </View>
        </View>
      </View>
      <View style={styles.lower}>
        <RoundButton name='check' color='green' />
        <RoundButton name='close' color='red' />
      </View>
    </View>
  )
}

export default ApprovalList
