import React, { memo } from 'react'
import { TextInput, View } from 'react-native'
import Search from '../../assets/images/search.svg'
import {
  cardWidth,
  s12,
  s16,
  s20,
  s24,
  s28,
  s32,
  s42,
} from '../../assets/sizes'

export default memo(function InputSearch({ keyword, handleSearch }) {
  return (
    <View
      style={{
        backgroundColor: '#F6F7F9',
        width: cardWidth,
        borderRadius: s42,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: s20,
        marginBottom: s24,
      }}>
      <Search
        width={s24}
        height={s24}
        fill="#535362"
        style={{ marginRight: s12 }}
      />
      <TextInput
        placeholder="Cari buku ..."
        placeholderTextColor="#535362"
        style={{
          fontFamily: 'medium',
          fontSize: s16,
          color: '#535362',
          width: cardWidth - s32 - s24 - s28,
          paddingVertical: s12,
          paddingHorizontal: 0,
        }}
        value={keyword}
        onChangeText={handleSearch}
      />
    </View>
  )
})
