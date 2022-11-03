import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { fieldWidth, s16, s20, s42 } from '../../assets/sizes'

export default memo(function ButtonSubmit({ loading, handleLogin }) {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={handleLogin}
      style={{
        backgroundColor: loading ? '#8ba3ea' : '#407BFF',
        width: fieldWidth,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: s16,
        borderRadius: s42,
        marginBottom: s20,
      }}>
      <Text
        style={{
          fontFamily: 'bold',
          fontSize: s20,
          color: '#fff',
        }}>
        {loading ? 'Memeriksa ...' : 'Masuk'}
      </Text>
    </TouchableOpacity>
  )
})
