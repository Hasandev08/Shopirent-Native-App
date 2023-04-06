import React from 'react'
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

import { categories } from '../../config/categories'
import { productList } from '../../config/productList'

import { styles } from './style'

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.homeContainer}>
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
          <Image source={require('../../assets/cart.png')} />
        </TouchableWithoutFeedback>
      </View>
      <Categories categories={categories} navigation={navigation} />
      <Text style={styles.homeHeading}>Sale Discount</Text>
      <ScrollView horizontal>
        {productList.map((item) => (
          <View key={item.id.toString()}>
            <SaleItemList item={item} onPress={() => navigation.navigate('Product', item)} />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.homeHeading}>Popular</Text>
      <ScrollView>
        {productList.map((item) => (
          <View key={item.id.toString()}>
            <PopularItemList item={item} onPress={() => navigation.navigate('Product', item)} />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  )
}

export default HomeScreen
