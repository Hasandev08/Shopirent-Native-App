import React from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './style'

const AppTextInput = ({ text, ...otherProps }) => (
  <>
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  </>
)

export default AppTextInput
