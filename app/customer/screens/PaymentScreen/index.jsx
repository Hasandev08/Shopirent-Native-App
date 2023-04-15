import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'

import AddressDisplay from '../../components/AddressDisplay'
import AppButton from '../../../components/AppButton'
import PaymentItemList from '../../components/PaymentItemList'
import PaymentMethod from '../../components/PaymentMethod'

import { styles } from './style'

const PaymentScreen = ({ route }) => {
  const listing = route.params

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
          <PaymentItemList
            name={listing.title}
            color='Red'
            size={listing.size}
            price={listing.subTotal}
            quantity={listing.quantity}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionHeading}>Add Description</Text>
          <TextInput editable multiline numberOfLines={4} style={styles.textInput} />
        </View>
        <View>
          <PaymentMethod subTotal={listing.subTotal} />
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
