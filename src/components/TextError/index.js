import React from 'react'
import { Text } from 'react-native'
import { s12, s16 } from '../../assets/sizes'

export default function TextError({ message }) {
  return (
    <Text
      style={{
        fontFamily: 'medium',
        fontSize: s16,
        color: '#ff7979',
        marginBottom: s12,
      }}>
      {message}
    </Text>
  )
}
