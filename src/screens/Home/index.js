import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { memo, useEffect, useState } from 'react'
import { Alert, Linking, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s20, s60 } from '../../assets/sizes'
import { CardMenu, HeaderMain, Loading } from '../../components'

export default memo(function Home({ navigation, route }) {
  const { account } = route.params
  const allMenu = ['Semua Buku', 'Novel', 'Ensiklop & Kamus', 'Modul']
  const menuKeys = ['Semua Buku', 'Novel', 'Ensiklopedia_dan_Kamus', 'Modul']

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const removeAccount = async () => {
    await AsyncStorage.removeItem('ACCOUNT')
    navigation.replace('Login')
  }

  const handleLogout = async () => {
    Alert.alert('Logout', 'Anda yakin keluar?', [
      {
        text: 'Tidak',
        style: 'cancel',
      },
      {
        text: 'Ya',
        onPress: removeAccount,
      },
    ])
  }

  const handleNavigate = (title, keyTitle) => {
    navigation.navigate('ListBook', {
      title,
      keyTitle,
      data,
      account,
    })
  }

  const handleMounting = async () => {
    fetch(
      'https://raw.githubusercontent.com/herdianurdin/api-dlib/main/members.json',
      {
        cache: 'no-cache',
      },
    )
      .then(response => response.json())
      .then(resUsers => {
        const filteredUsers = resUsers.filter(user => user.id === account.id)

        if (filteredUsers.length === 0) {
          removeAccount()
        } else {
          fetch(
            'https://raw.githubusercontent.com/herdianurdin/api-dlib/main/books.json',
            {
              cache: 'no-cache',
            },
          )
            .then(response => response.json())
            .then(resBooks => {
              setData(resBooks.sort((a, b) => b.createdAt - a.createdAt))
              setLoading(false)
            })
            .catch(() => {
              Alert.alert(
                'Peringatan!',
                'Tidak dapat terhubung ke database! Silakan periksa koneksi internet Anda.',
                [
                  {
                    text: 'Reload',
                    onPress: () => setRefresh(true),
                  },
                ],
              )
            })
        }
      })
      .catch(() => {
        Alert.alert(
          'Peringatan!',
          'Tidak dapat terhubung ke database! Silakan periksa koneksi internet Anda.',
          [
            {
              text: 'Reload',
              onPress: () => setRefresh(true),
            },
          ],
        )
      })
      .finally(() => {
        setRefresh(false)
      })
  }

  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    let isMounted = true
    if (isMounted) handleMounting()

    return () => {
      isMounted = false
    }
  }, [refresh])

  if (loading) return <Loading />

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FBFDFF',
      }}>
      <HeaderMain action={handleLogout} />
      {allMenu.map((menu, index) => (
        <CardMenu
          key={index.toString()}
          title={menu}
          index={index}
          action={() => handleNavigate(menu, menuKeys[index])}
        />
      ))}
      <Text
        style={{
          fontFamily: 'bold',
          fontSize: s20,
          marginTop: s60,
          color: '#407BFF',
        }}
        onPress={() => Linking.openURL('https://herdianurdin.my.id/')}>
        Created by Herdianurdin
      </Text>
    </SafeAreaView>
  )
})
