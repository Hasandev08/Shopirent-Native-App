import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './style'

const AccountList = ({ title, icon }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.list}>
          <Image source={icon} style={{ marginHorizontal: 15 }} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default AccountList
