import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import SearchBar from '../../components/SearchBar'

import colors from '../../../config/colors'
import { productList } from '../../config/productList'

import { RFPercentage } from 'react-native-responsive-fontsize'

import { styles } from './style'

function SearchScreen(props) {
  const [input, setInput] = useState('')
  const [data, setData] = useState(productList)

  const handleInput = (input) => {
    let array = ['category']
    let res = []
    array.forEach((item) => {
      let temp = data.filter((tempData) => {
        return tempData[item].toLowerCase().includes(input.toLowerCase())
      })
      res = [...res, ...temp]
    })
    setData([...new Set(res)])
    if (input === '') setData(productList)
    setInput(input)
  }

  return (
    <View style={styles.searchContainer}>
      <SearchBar input={input} setInput={handleInput} />
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
