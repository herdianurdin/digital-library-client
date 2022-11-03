import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { memo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ButtonSubmit,
  HeaderLogin,
  InputPassword,
  InputUsername,
  TextError,
} from '../../components'
import { alertWarning } from '../../utils/alert'

export default memo(function Login({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [errorLogin, setErrorLogin] = useState(false)

  const setAccount = async account => {
    return await AsyncStorage.setItem('ACCOUNT', JSON.stringify(account))
  }

  const handleLogin = async () => {
    setLoading(true)
    setErrorLogin(false)

    if (username.trim() === '') {
      alertWarning('Peringatan!', 'Mohon masukkan username Anda!')
      return setLoading(false)
    } else if (password.trim() === '') {
      alertWarning('Peringatan!', 'Mohon masukkan password Anda!')
      return setLoading(false)
    } else {
      fetch(
        'https://raw.githubusercontent.com/herdianurdin/api-dlib/main/members.json',
        {
          cache: 'no-cache',
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          const users = responseJson
          const filterUsers = users.filter(user => user.username === username)

          if (filterUsers.length === 0) return setErrorLogin(true)
          else {
            const user = filterUsers[0]
            if (user.password !== password) return setErrorLogin(true)
            else {
              const account = {
                id: user.id,
                name: user.name,
                role: user.role,
              }
              setAccount(account)

              navigation.replace('Home', { account })
            }
          }
        })
        .catch(() => {
          alertWarning(
            'Peringatan!',
            'Tidak dapat terhubung ke database! Silakan periksa koneksi internet Anda.',
          )
        })
        .finally(() => setLoading(false))
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBFDFF',
      }}>
      <HeaderLogin />
      <InputUsername
        username={username}
        setUsername={value => setUsername(value)}
      />
      <InputPassword
        password={password}
        setPassword={value => setPassword(value)}
      />
      <ButtonSubmit loading={loading} handleLogin={handleLogin} />
      {errorLogin && <TextError message="Username atau Password salah!" />}
    </SafeAreaView>
  )
})
