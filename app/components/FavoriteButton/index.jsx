import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../config/colors'

const FavoriteButton = () => {
  const [toggled, setToggled] = useState(false)

  const handlePress = () => {
    setToggled((s) => !s)
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {!toggled ? (
        <MaterialIcons name='favorite-outline' size={24} color={colors.red} />
      ) : (
        <MaterialIcons name='favorite' size={24} color={colors.red} />
      )}
    </TouchableWithoutFeedback>
  )
}

export default FavoriteButton
