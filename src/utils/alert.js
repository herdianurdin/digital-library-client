import { Alert } from 'react-native'

export function alertWarning(title, message) {
  Alert.alert(title, message, [{ text: 'OK' }])
}
