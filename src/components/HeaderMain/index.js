import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Dlib from '../../assets/images/dlib.svg'
import Logout from '../../assets/images/log-out.svg'
import { cardWidth, s12, s24, s26, s32, s64, s9 } from '../../assets/sizes'

export default memo(function HeaderMain({ action, disabled }) {
  return (
    <View
      style={{
        width: cardWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: s32,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Dlib width={s64} height={s64} />
        <Text
          style={{
            fontFamily: 'bold',
            fontSize: s26,
            marginLeft: s12 / 2,
            color: '#407BFF',
          }}>
          Digital Library
        </Text>
      </View>
      <TouchableOpacity
        disabled={disabled}
        style={{
          backgroundColor: '#F1F2F3',
          padding: s9,
          borderRadius: s24,
        }}
        onPress={action}>
        <Logout width={s24} height={s24} fill="#407BFF" />
      </TouchableOpacity>
    </View>
  )
})
