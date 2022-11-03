import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const s9 = (width / 45.6667) | 0
const s12 = (width / 34.25) | 0
const s16 = (width / 25.6875) | 0
const s20 = (width / 20.55) | 0
const s24 = (width / 17.125) | 0
const s26 = (width / 15.8077) | 0
const s28 = (width / 14.6786) | 0
const s32 = (width / 12.84375) | 0
const s42 = (width / 9.7857) | 0
const s60 = (width / 6.85) | 0
const s64 = (width / 6.421875) | 0
const s90 = (width / 4.5667) | 0

const cardWidth = (width / 1.1322) | 0
const cardMenuImageSize = (width / 2.9357) | 0
const cardMenuHeight = (width / 4.11) | 0

const fieldWidth = (width / 1.2569) | 0

export {
  s9,
  s12,
  s16,
  s20,
  s24,
  s26,
  s28,
  s32,
  s42,
  s60,
  s64,
  s90,
  cardWidth,
  cardMenuImageSize,
  cardMenuHeight,
  fieldWidth,
  width,
  height,
}
