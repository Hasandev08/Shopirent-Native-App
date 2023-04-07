import { Alert } from 'react-native'

export const displayAlert = (question, notification, text1, fun, text2) => {
  Alert.alert(
    question,
    notification,
    [
      {
        text: text1,
        onPress: fun,
      },
      {
        text: text2,
      },
    ],
    {
      cancelable: true,
    }
  )
}
