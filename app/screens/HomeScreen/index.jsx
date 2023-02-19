import React from 'react'
import { FlatList, ScrollView, Text } from 'react-native'

import Categories from '../../components/Categories'
import PopularItemList from '../../components/PopularItemList'
import SaleItemList from '../../components/SaleItemList'

import { categories } from '../../config/categories'
import { popularList } from '../../config/popularList'
import { saleItem } from '../../config/saleList'
import { styles } from './style'

function HomeScreen(props) {
  return (
    <ScrollView scrollEnabled style={styles.homeContainer}>
      <Text style={styles.homeHeading}>Category</Text>
      <Categories categories={categories} />
      <Text style={styles.homeHeading}>Sale Discount</Text>
      <FlatList
        data={saleItem}
        renderItem={({ item }) => <SaleItemList title={item.title} image={item.image} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Text style={styles.homeHeading}>Popular</Text>
      <FlatList
        data={popularList}
        renderItem={({ item }) => (
          <PopularItemList
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  )
}

export default HomeScreen
