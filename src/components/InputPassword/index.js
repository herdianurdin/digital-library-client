import React, { memo, useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import Eye from '../../assets/images/eye.svg'
import EyeOff from '../../assets/images/eye-off.svg'
import { fieldWidth, s12, s16, s24, s28, s32, s42 } from '../../assets/sizes'

export default memo(function InputPassword({ password, setPassword }) {
  const [hidePassword, setHidePassword] = useState(true)
  const handleHidePassword = () => setHidePassword(!hidePassword)

  return (
    <View
      style={{
        flexDirection: 'row',
        width: fieldWidth,
        borderRadius: s42,
        backgroundColor: '#F6F7F9',
        marginBottom: s32,

        alignItems: 'center',
      }}>
      <TextInput
        placeholder="Password"
        placeholderTextColor="#535362"
        style={{
          width: fieldWidth - s28 * 2,
          fontFamily: 'medium',
          fontSize: s16,
          color: '#535362',
          paddingTop: s12,
          paddingLeft: s28,
          paddingRight: s12,
        }}
        secureTextEntry={hidePassword}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleHidePassword}>
        {hidePassword ? (
          <Eye width={s24} height={s24} fill="#535362" />
        ) : (
          <EyeOff width={s24} height={s24} fill="#535362" />
        )}
      </TouchableOpacity>
    </View>
  )
})
