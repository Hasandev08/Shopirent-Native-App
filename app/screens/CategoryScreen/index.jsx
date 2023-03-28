import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

import PopularItemList from '../../components/PopularItemList'
import SaleItemList from '../../components/SaleItemList'

import { productList } from '../../config/productList'

import { styles } from './style'

function CategoryScreen({ navigation, route }) {
  const listing = route.params
  const [list, setList] = useState(productList)
  let tempList = []

  useEffect(() => {
    let arr = ['women', 'men', 'kids']
    arr.forEach((item) => {
      if (listing.category === item) {
        console.log(productList, listing)
        tempList = productList.filter((it) => it.category === item)
        setList(tempList)
      }
    })
  }, [])

  return (
    <ScrollView scrollEnabled style={styles.homeContainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>Category</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
          <Image source={require('../../../assets/cart.png')} />
        </TouchableWithoutFeedback>
      </View>
      {/* {categories.map((item) => (
        <View key={item.id.toString()}>
          <Categories title={item.title} image={item.image} />
        </View>
      ))} */}
      <Text style={styles.homeHeading}>Sale Discount</Text>
      <ScrollView horizontal>
        {list.map((item) => (
          <View key={item.id.toString()}>
            <SaleItemList item={item} onPress={() => navigation.navigate('Product', item)} />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.homeHeading}>Popular</Text>
      <ScrollView>
        {list.map((item) => (
          <View key={item.id.toString()}>
            <PopularItemList item={item} onPress={() => navigation.navigate('Product', item)} />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  )
}

export default CategoryScreen
