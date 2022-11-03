import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { cardWidth, s24, s32 } from '../../assets/sizes'
import ChevronBack from '../../assets/images/chevron-back.svg'

export default memo(function HeaderList({ title, handleBack }) {
  return (
    <View
      style={{
        width: cardWidth,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: s32,
      }}>
      <Text
        style={{
          fontFamily: 'bold',
          fontSize: s24,
          color: '#407BFF',
        }}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={handleBack}
        style={{
          position: 'absolute',
          left: 0,
        }}>
        <ChevronBack width={s32} height={s32} />
      </TouchableOpacity>
    </View>
  )
})
