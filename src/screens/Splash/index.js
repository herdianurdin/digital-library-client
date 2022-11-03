import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { memo, useEffect } from 'react'
import { Loading } from '../../components'

export default memo(function Splash({ navigation }) {
  const getItem = async () => {
    try {
      return await AsyncStorage.getItem('ACCOUNT')
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    const timing = setTimeout(
      () =>
        getItem().then(account =>
          navigation.replace(account ? 'Home' : 'Login', {
            account: account ? JSON.parse(account) : null,
          }),
        ),
      1500,
    )

    return () => clearInterval(timing)
  }, [])

  return <Loading />
})
