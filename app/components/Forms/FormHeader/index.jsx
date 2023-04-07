import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './style'

const FormHeader = ({ title, subTitle, text, onPress }) => {
  return (
    <View style={styles.upper}>
      {subTitle && (
        <TouchableOpacity onPress={onPress} style={{ alignItems: 'flex-end', marginRight: 25 }}>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {text && <Text style={styles.para}>{text}</Text>}
    </View>
  )
}

export default FormHeader
