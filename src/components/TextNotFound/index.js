import React, { memo } from 'react'
import { Text } from 'react-native'
import { s16 } from '../../assets/sizes'

export default memo(function TextNotFound() {
  return (
    <Text
      style={{
        fontFamily: 'medium',
        fontSize: s16,
        color: 535362,
      }}>
      Buku tidak ditemukkan ...
    </Text>
  )
})
