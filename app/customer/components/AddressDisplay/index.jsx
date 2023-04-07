import React from 'react'
import { Text, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import colors from '../../../config/colors'

import { styles } from './style'

const AddressDisplay = ({ name, street, city, province, number }) => {
  return (
    <View style={styles.address}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name='location-outline' size={24} color={colors.secondary} />
          <Text style={{ color: colors.secondary }}>Shipping Address</Text>
        </View>
        <View>
          <Text style={{ color: colors.secondary }}>Edit</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.subAddress}>
          <Text style={{ color: colors.secondary }}>{street}</Text>
          <Text style={{ color: colors.secondary }}>{city}</Text>
          <Text style={{ color: colors.secondary }}>{province}</Text>
          <Text style={{ color: colors.secondary }}>{number}</Text>
        </View>
      </View>
    </View>
  )
}

export default AddressDisplay
