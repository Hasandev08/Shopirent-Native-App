import AsyncStorage from '@react-native-async-storage/async-storage'

export const getAsync = async (name = 'favorites') => {
  let result = await AsyncStorage.getItem(name)
  if (result) {
    console.log(result)
    return JSON.parse(result)
  } else {
    return []
  }
}
