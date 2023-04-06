import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'

import AddressDisplay from '../../components/AddressDisplay'
import AppButton from '../../components/common/AppButton'
import PaymentItemList from '../../components/PaymentItemList'
import PaymentMethod from '../../components/PaymentMethod'

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
        <View style={styles.description}>
          <Text style={styles.descriptionHeading}>Add Description</Text>
          <TextInput editable multiline numberOfLines={4} style={styles.textInput} />
        </View>
        <View>
          <PaymentMethod />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>3300</Text>
        </View>
        <AppButton title='BUY NOW' />
      </View>
    </View>
  )
}

export default PaymentScreen
