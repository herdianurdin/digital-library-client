import NetInfo from '@react-native-community/netinfo'
import firestore from '@react-native-firebase/firestore'
import React, { useCallback, useState } from 'react'
import { Alert, FlatList, SafeAreaView } from 'react-native'
import {
  CardBook,
  HeaderList,
  InputSearch,
  TextNotFound,
} from '../../components'

export default function ListBook({ navigation, route }) {
  const { data, account, title, keyTitle } = route.params

  const [keyword, setKeyword] = useState('')
  const [books, setBooks] = useState(
    title === 'Semua Buku'
      ? data
      : data.filter(d => d.categoryId.toLowerCase() === keyTitle.toLowerCase()),
  )
  const handleBack = () => navigation.goBack()

  const handleSearch = value => {
    setKeyword(value)

    setBooks(
      title === 'Semua Buku'
        ? data.filter(d => d.title.toLowerCase().includes(value.toLowerCase()))
        : data.filter(
            d =>
              d.title.toLowerCase().includes(value.toLowerCase()) &&
              d.categoryId.toLowerCase() === title.toLowerCase(),
          ),
    )
  }

  const handleOpenBook = async (bookId, uri) => {
    NetInfo.fetch().then(state => {
      if (state.isInternetReachable) {
        const timestamp = +new Date()

        firestore()
          .collection('views')
          .doc(timestamp.toString())
          .set({
            timestamp,
            memberId: account.id,
            bookId,
          })
          .then(() => {
            navigation.navigate('PdfView', {
              source: { uri, cache: true },
            })
          })
      } else {
        Alert.alert('Offline', 'Maaf Anda sedang offline saat ini!', [
          {
            text: 'OK',
            style: 'cancel',
          },
        ])
      }
    })
  }

  const url =
    'https://raw.githubusercontent.com/herdianurdin/api-dlib/main/files/'

  const renderItem = useCallback(
    ({ item }) => (
      <CardBook
        title={item.title}
        author={item.author}
        coverSrc={`${url}${item.coverName}`}
        action={() => handleOpenBook(item.id, `${url}${item.bookName}`)}
      />
    ),
    [],
  )

  const keyExtractor = useCallback(book => book.id, [])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FBFDFF',
      }}>
      <HeaderList title={title} handleBack={handleBack} />
      <InputSearch keyword={keyword} handleSearch={handleSearch} />
      {books.length !== 0 ? (
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={6}
          initialNumToRender={6}
          removeClippedSubviews={true}
        />
      ) : (
        <TextNotFound />
      )}
    </SafeAreaView>
  )
}
