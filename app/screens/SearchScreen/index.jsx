import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import SearchBar from '../../components/SearchBar'

import colors from '../../config/colors'
import { popularList } from '../../config/popularList'

import { RFPercentage } from 'react-native-responsive-fontsize'

import { styles } from './style'

function SearchScreen(props) {
  const [input, setInput] = useState('')
  const [data, setData] = useState(popularList)

  return (
    <View style={styles.searchContainer}>
      <SearchBar input={input} setInput={setInput} />
      <ScrollView>
        <View style={styles.component}>
          {data.map((item) => (
            <View key={item.id}>
              <Image source={item.image} style={item.id % 2 === 0 ? styles.image1 : styles.image} />
              <View style={styles.details}>
                <View style={{ width: RFPercentage(10) }}>
                  <Text style={{ color: colors.primary, fontSize: 12, fontWeight: 'bold' }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: colors.primary, fontSize: 12 }}>{item.rating}</Text>
                </View>
                <View>
                  <Text style={{ color: colors.secondary, fontSize: 12, fontWeight: 'bold' }}>
                    Rs. {item.price}/-
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default SearchScreen
