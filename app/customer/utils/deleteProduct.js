import AsyncStorage from '@react-native-async-storage/async-storage'

export const deleteProduct = async (item, setItem, product, name) => {
  const newProduct = item.filter((n) => n.id !== product.id)
  await AsyncStorage.setItem(name, JSON.stringify(newProduct))
  setItem(newProduct)
}

export const handleDeleteAll = async (setItem, name) => {
  await AsyncStorage.removeItem(name)
  setItem([])
}
