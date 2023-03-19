import React, { useEffect, useState } from 'react'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import Categories from '../../components/Categories'
import PopularItemList from '../../components/PopularItemList'
import SaleItemList from '../../components/SaleItemList'

import { productList } from '../../config/productList'

import { styles } from './style'

function CategoryScreen({ navigation, route }) {
  const listing = route.params
  const [list, setList] = useState(productList)
  let tempList = []

  useEffect(() => {
    if (listing.category === 'women') {
      tempList = productList.filter((item) => item.category === 'women')
      setList(tempList)
    }
  }, [])

  console.log('List', list)

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
            <SaleItemList
              id={item.id}
              title={item.title}
              image={item.image}
              onPress={() => navigation.navigate('Product', item)}
            />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.homeHeading}>Popular</Text>
      <ScrollView>
        {list.map((item) => (
          <View key={item.id.toString()}>
            <PopularItemList
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              onPress={() => navigation.navigate('Product', item)}
            />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  )
}

export default CategoryScreen
