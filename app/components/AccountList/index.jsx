import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './style'

const AccountList = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.list}>
          <Image source={icon} style={{ marginHorizontal: 15 }} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AccountList
