import React from 'react'
import { Image, Text, TouchableNativeFeedback, View } from 'react-native'

import { styles } from './style'

const AccountList = ({ title, icon, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.list}>
        <Image source={icon} style={{ marginHorizontal: 15 }} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default AccountList
