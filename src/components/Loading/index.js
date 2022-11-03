import React, { memo } from 'react'
import { SafeAreaView } from 'react-native'
import Dlib from '../../assets/images/dlib.svg'
import { s24 } from '../../assets/sizes'

export default memo(function Loading() {
  const s240 = s24 * 10

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FBFDFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Dlib width={s240} height={s240} />
    </SafeAreaView>
  )
})
