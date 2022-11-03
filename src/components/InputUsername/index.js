import React, { memo } from 'react'
import { TextInput, View } from 'react-native'
import { fieldWidth, s12, s16, s24, s28, s42 } from '../../assets/sizes'

export default memo(function InputUsername({ username, setUsername }) {
  return (
    <View
      style={{
        width: fieldWidth,
        borderRadius: s42,
        justifyContent: 'center',
        backgroundColor: '#F6F7F9',
        marginBottom: s24,
      }}>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#535362"
        style={{
          width: fieldWidth,
          fontFamily: 'medium',
          fontSize: s16,
          color: '#535362',
          paddingTop: s12,
          paddingHorizontal: s28,
        }}
        value={username}
        onChangeText={setUsername}
      />
    </View>
  )
})
