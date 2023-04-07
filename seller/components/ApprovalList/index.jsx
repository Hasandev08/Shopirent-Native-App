import React, { useState } from 'react'
import { Text, View } from 'react-native'

import RoundButton from '../common/RoundButton'
import { displayAlert } from '../../../customer/app/utils/alert'

import { styles } from './style'

const ApprovalList = () => {
  const [approved, setApproved] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={styles.upper}>
          <View style={styles.left}>
            <Text style={styles.name}>Hello</Text>
            <Text style={styles.subContent}>Color: Dark Grey</Text>
            <Text style={styles.subContent}>Size: L</Text>
            <Text style={styles.subContent}>x1</Text>
            <Text style={styles.price}>1000/-</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.name}>Hasan</Text>
            <Text style={styles.subContent}>Address</Text>
            <Text style={styles.subContent}>03153260203</Text>
            <Text style={styles.subContent}>From: 4/7/2023</Text>
            <Text style={styles.subContent}>To: 4/7/2023</Text>
          </View>
        </View>
      </View>
      <View style={styles.lower}>
        {!approved ? (
          <>
            <RoundButton
              name='check'
              color='green'
              onPress={() =>
                displayAlert(
                  'Are you sure?',
                  'This action will place the order',
                  'Accept',
                  () => setApproved(true),
                  'Cancel'
                )
              }
            />
            <RoundButton
              name='close'
              color='red'
              onPress={() =>
                displayAlert(
                  'Are you sure?',
                  'This action will cancel the order',
                  'Delete',
                  () => console.log('Order Cancelled'),
                  'Cancel'
                )
              }
            />
          </>
        ) : (
          <Text style={styles.approved}>Approved</Text>
        )}
      </View>
    </View>
  )
}

export default ApprovalList
