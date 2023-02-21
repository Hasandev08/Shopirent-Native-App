import React from 'react'
import { ScrollView, View } from 'react-native'

import AddressDisplay from '../../components/AddressDisplay'
import AppButton from '../../components/common/AppButton'
import PaymentItemList from '../../components/PaymentItemList'

import { styles } from './style'

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <AddressDisplay
          name='Hasan'
          street='Mughal Pura'
          city='Lahore'
          province='Punjab'
          number='03153260203'
        />
        <View>
          <PaymentItemList name="Levi's Jeans" color='Red' size='L' price='3000' quantity='2' />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <AppButton title='BUY NOW' />
      </View>
    </View>
  )
}

export default PaymentScreen
