import React from 'react'
import { ScrollView, View } from 'react-native'

import OrderList from '../../components/OrderList'

import { styles } from './style'

const OrderScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <OrderList />
      </View>
    </ScrollView>
  )
}

export default OrderScreen
