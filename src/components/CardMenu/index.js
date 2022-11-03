import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import Background from '../../assets/images/card_bg.svg'
import {
  cardMenuHeight,
  cardMenuImageSize,
  cardWidth,
  s12,
  s16,
  s24,
  s26,
} from '../../assets/sizes'

export default memo(function CardMenu({ title, index, action, disabled }) {
  const images = [
    require('../../assets/images/all.webp'),
    require('../../assets/images/novel.webp'),
    require('../../assets/images/encyclopedia.webp'),
    require('../../assets/images/modul.webp'),
  ]

  return (
    <TouchableOpacity
      onPress={action}
      style={{
        width: cardWidth,
        height: cardMenuHeight,
        overflow: 'hidden',
        borderRadius: s16,
        paddingLeft: s24,
        marginBottom: index === images.length - 1 ? 0 : s16,
        justifyContent: 'center',
        shadowColor: '#3F3D56',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
      }}>
      <Background
        width={cardWidth}
        height={cardWidth}
        style={{
          position: 'absolute',
        }}
      />
      <FastImage
        source={images[index]}
        style={{
          width: cardMenuImageSize,
          height: cardMenuImageSize,
          position: 'absolute',
          right: s12,
        }}
      />
      <Text
        style={{
          fontFamily: 'bold',
          fontSize: s26,
          color: 'white',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
})
