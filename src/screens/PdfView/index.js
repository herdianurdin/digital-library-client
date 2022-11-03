import React, { useState } from 'react'
import {
  Linking,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native'
import Pdf from 'react-native-pdf'
import Dlib from '../../assets/images/dlib.svg'
import { height, s12, s16, s24, s42, width } from '../../assets/sizes'

export default function PdfView({ route }) {
  const { source } = route.params
  const iconSize = s16 * 10

  const [currentPage, setCurrentPage] = useState(0)
  const [goToPage, setGoToPage] = useState(null)
  const [totalPage, setTotalPage] = useState(0)
  const [refPdf, setRefPdf] = useState(null)
  const [loading, setLoading] = useState(true)

  const renderActivityIndicator = progress => {
    return (
      <>
        <Dlib width={iconSize} height={iconSize} />
        <Text
          style={{
            fontFamily: 'medium',
            fontSize: s16,
            color: '#3F3D56',
          }}>
          Memuat {Math.floor(progress * 100)}%
        </Text>
      </>
    )
  }

  const onLoadComplete = (numberOfPages, _) => {
    setTotalPage(numberOfPages)
    setLoading(false)
  }

  const onChangeText = value => {
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setGoToPage(parseInt(value) > totalPage ? goToPage : value)
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FBFDFF',
      }}>
      <StatusBar hidden />
      {!loading && (
        <View
          style={{
            height: s42 + s12,
            flexDirection: 'row',
            backgroundColor: '#407BFF',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingHorizontal: s24,
          }}>
          <Text
            style={{
              fontFamily: 'semi',
              fontSize: s16,
              color: '#FBFDFF',
              marginRight: s12,
            }}>
            Pergi ke halaman :
          </Text>
          <TextInput
            placeholderTextColor="#535362"
            style={{
              fontFamily: 'semi',
              fontSize: s16,
              textAlign: 'center',
              color: '#212121',
              backgroundColor: '#F6F7F9',
              paddingVertical: s12 / 6,
              width: s42 * 2,
              borderRadius: s12 / 3,
            }}
            placeholder={totalPage.toString()}
            keyboardType="numeric"
            numeric
            onChangeText={onChangeText}
            onSubmitEditing={() =>
              refPdf.setPage(goToPage ? parseInt(goToPage) : 1)
            }
            value={goToPage}
          />
        </View>
      )}
      <Pdf
        ref={pdf => setRefPdf(pdf)}
        trustAllCerts={false}
        source={source}
        renderActivityIndicator={renderActivityIndicator}
        onLoadComplete={onLoadComplete}
        onPageChanged={(page, _) => setCurrentPage(page)}
        onPressLink={uri => Linking.openURL(uri)}
        style={{
          width: width,
          height: height - s42 - s12 - s42,
          backgroundColor: '#FBFDFF',
        }}
      />
      {!loading && (
        <View
          style={{
            height: s42,
            flexDirection: 'row',
            backgroundColor: '#407BFF',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'semi',
              fontSize: s16,
              color: '#FBFDFF',
            }}>
            Halaman {currentPage} dari {totalPage}
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}
