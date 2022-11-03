import React, { memo } from 'react'
import { Text } from 'react-native'
import { s32, s42 } from '../../assets/sizes'

export default memo(function HeaderLogin() {
  return (
    <Text
      style={{
        fontFamily: 'bold',
        fontSize: s42,
        color: '#407BFF',
        marginBottom: s32,
      }}>
      Login
    </Text>
  )
})
