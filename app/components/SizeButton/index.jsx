import React, { useState } from 'react'

import { Text, TouchableWithoutFeedback, View } from 'react-native'

import colors from '../../config/colors'

import { styles } from './style'

const SizeButton = ({ handleSize = () => {} }) => {
  const [size, setSize] = useState('M')
  return (
    <>
      {['S', 'M', 'L', 'XL'].map((item) => (
        <TouchableWithoutFeedback
          key={item}
          onPress={() => {
            handleSize(item)
            setSize(item)
          }}
        >
          <View style={item === size ? styles.sizeOn : styles.size}>
            <Text style={{ color: item === size ? colors.white : colors.primary, fontSize: 14 }}>
              {item}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
      {/* {small ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(true)
            setmedium(false)
            setLarge(false)
            setXlarge(false)
          }}
        >
          <View style={styles.sizeOn}>
            <Text style={{ color: colors.white, fontSize: 14 }}>S</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(true)
            setmedium(false)
            setLarge(false)
            setXlarge(false)
          }}
        >
          <View style={styles.size}>
            <Text style={{ color: colors.primary, fontSize: 14 }}>S</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      {medium ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(false)
            setmedium(true)
            setLarge(false)
            setXlarge(false)
          }}
        >
          <View style={styles.sizeOn}>
            <Text style={{ color: colors.white, fontSize: 14 }}>M</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(false)
            setmedium(true)
            setLarge(false)
            setXlarge(false)
          }}
        >
          <View style={styles.size}>
            <Text style={{ color: colors.primary, fontSize: 14 }}>M</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      {large ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(false)
            setmedium(false)
            setLarge(true)
            setXlarge(false)
          }}
        >
          <View style={styles.sizeOn}>
            <Text style={{ color: colors.white, fontSize: 14 }}>L</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(false)
            setmedium(false)
            setLarge(true)
            setXlarge(false)
          }}
        >
          <View style={styles.size}>
            <Text style={{ color: colors.primary, fontSize: 14 }}>L</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      {xlarge ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(false)
            setmedium(false)
            setLarge(false)
            setXlarge(true)
          }}
        >
          <View style={styles.sizeOn}>
            <Text style={{ color: colors.white, fontSize: 14 }}>XL</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setSmall(false)
            setmedium(false)
            setLarge(false)
            setXlarge(true)
          }}
        >
          <View style={styles.size}>
            <Text style={{ color: colors.primary, fontSize: 14 }}>XL</Text>
          </View>
        </TouchableWithoutFeedback>
      )} */}
    </>
  )
}

export default SizeButton
