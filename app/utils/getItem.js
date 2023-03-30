import AsyncStorage from '@react-native-async-storage/async-storage'

export const getAsync = async (name) => {
  let result = await AsyncStorage.getItem(name)
  if (result) {
    return JSON.parse(result)
  } else {
    return []
  }
}
