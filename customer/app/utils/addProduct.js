import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAsync } from './getItem'

const addingProduct = async (listing, result, name, setToggled, size, count) => {
  listing.quantity = count
  listing.size = size
  const updatedProducts = [listing]
  setToggled(true)

  let newProducts = [...result, ...updatedProducts]
  await AsyncStorage.setItem(name, JSON.stringify(newProducts))
}

export const handleAddProduct = async (listing, name, setToggled, size, count) => {
  try {
    let result = await getAsync(name)
    if (result.length == 0) {
      addingProduct(listing, result, name, setToggled, size, count)
    } else {
      let isPresent = result.filter((item) => item.id === listing.id)
      if (isPresent.length === 0) {
        addingProduct(listing, result, name, setToggled, size, count)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
