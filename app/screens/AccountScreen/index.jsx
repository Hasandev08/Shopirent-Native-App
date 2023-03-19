import React, { useState } from 'react'

import { FlatList, Text, View } from 'react-native'

import AccountList from '../../components/AccountList'
import ImageInput from '../../components/ImageInput'
import { accountList } from '../../config/accountList'

import * as ImagePicker from 'expo-image-picker'

import { styles } from './style'

function AccountScreen(props) {
  const [imageUri, setImageUri] = useState(null)

  const selectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
      if (!result.canceled) {
        setImageUri(result.assets[0].uri)
      }
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.personal}>
        <ImageInput onPress={selectImage} imageUri={imageUri} />
        <Text style={styles.name}>Hasan</Text>
        <Text style={styles.email}>hasanahmed0089@gmail.com</Text>
      </View>
      <View style={styles.listItems}>
        <FlatList
          data={accountList}
          renderItem={({ item }) => <AccountList title={item.title} icon={item.icon} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default AccountScreen
