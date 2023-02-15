import React from 'react'

import { TextInput, View } from 'react-native'

import { styles } from './style'

function SearchBar(props) {
  return (
    <View>
      <TextInput style={styles.search} placeholder='Search' />
    </View>
  )
}

export default SearchBar
