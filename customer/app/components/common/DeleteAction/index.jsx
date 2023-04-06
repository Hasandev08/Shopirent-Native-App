import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../../config/colors'
import { styles } from './style'

const DeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DeleteAction
