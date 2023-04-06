import React from 'react'

import { TextInput, View } from 'react-native'

import { styles } from './style'

function SearchBar({ input, setInput }) {
  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder='Search'
        value={input}
        onChangeText={(text) => setInput(text)}
      />
    </View>
  )
}

export default SearchBar
