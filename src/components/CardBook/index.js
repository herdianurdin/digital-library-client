import React, { memo, useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import {
  cardWidth,
  s12,
  s16,
  s20,
  s26,
  s32,
  s42,
  s60,
  s90,
} from '../../assets/sizes'

export default memo(function CardBook({ coverSrc, action, title, author }) {
  const [loading, setLoading] = useState(true)
  const onLoad = () => setLoading(false)

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: s16,
        width: cardWidth,
        height: s90 + s32,
        borderRadius: s16,
        shadowColor: '#3F3D56',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: s16,
        overflow: 'hidden',
      }}
      onPress={action}>
      <View
        style={{
          width: s60,
          height: s90,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: s20,
          borderRadius: s16 / 4,
          backgroundColor: '#F6F7F9',
          shadowColor: '#3F3D56',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.15,
          shadowRadius: 2,
          elevation: 2,
        }}>
        <FastImage
          style={{
            width: s60,
            height: s90,
          }}
          source={{
            uri: coverSrc,
          }}
          resizeMode={FastImage.resizeMode.contain}
          onLoad={onLoad}
        />
        {loading && (
          <ActivityIndicator
            size="small"
            color="#407BFF"
            style={{
              position: 'absolute',
              alignSelf: 'center',
            }}
          />
        )}
      </View>
      <View
        style={{
          width: cardWidth - s42 - s60 - s12,
        }}>
        <Text
          style={{
            fontFamily: 'semi',
            fontSize: s20,
            color: '#3F3D56',
            lineHeight: s26,
          }}
          numberOfLines={2}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'medium',
            fontSize: s12,
            color: '#3F3D56',
            lineHeight: s16,
          }}
          numberOfLines={2}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  )
})
