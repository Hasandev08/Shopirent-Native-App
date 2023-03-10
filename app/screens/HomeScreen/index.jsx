import React from 'react'
import {
  FlatList,
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

import { categories } from '../../config/categories'
import { productList } from '../../config/productList'

import { styles } from './style'

function HomeScreen({ navigation }) {
  return (
    <ScrollView scrollEnabled style={styles.homeContainer}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.bar}>
            <Text style={styles.barText}>Login/Signup</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>Category</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
          <Image source={require('../../../assets/cart.png')} />
        </TouchableWithoutFeedback>
      </View>
      <Categories categories={categories} />
      <Text style={styles.homeHeading}>Sale Discount</Text>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <SaleItemList
            title={item.title}
            image={item.image}
            onPress={() => navigation.navigate('Product', item)}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Text style={styles.homeHeading}>Popular</Text>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <PopularItemList
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            onPress={() => navigation.navigate('Product', item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  )
}

export default HomeScreen
