import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAsync } from './getItem'

const addingProduct = async (listing, result, name, setToggled) => {
  const updatedProducts = [listing]
  if (name === 'favorites') setToggled(true)

  let newProducts = [...result, ...updatedProducts]
  await AsyncStorage.setItem(name, JSON.stringify(newProducts))
}

export const handleAddProduct = async (listing, name, setToggled) => {
  try {
    let result = await getAsync(name)
    if (result.length == 0) {
      addingProduct(listing, result, name, setToggled)
    } else {
      let isPresent = result.filter((item) => item.id === listing.id)
      if (isPresent.length === 0) {
        addingProduct(listing, result, name, setToggled)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
