import { injectGlobal } from 'styled-components'

import CaviarDreamsEOT from '../assets/fonts/CaviarDreams/CaviarDreams.eot'
import CaviarDreamsOTF from '../assets/fonts/CaviarDreams/CaviarDreams.otf'
import CaviarDreamsTTF from '../assets/fonts/CaviarDreams/CaviarDreams.ttf'
import CaviarDreamsWOFF from '../assets/fonts/CaviarDreams/CaviarDreams.woff'
import CaviarDreamsWOFF2 from '../assets/fonts/CaviarDreams/CaviarDreams.woff2'
import CaviarDreamsItalicEOT from '../assets/fonts/CaviarDreams/CaviarDreams-Italic.eot'
import CaviarDreamsItalicOTF from '../assets/fonts/CaviarDreams/CaviarDreams-Italic.otf'
import CaviarDreamsItalicTTF from '../assets/fonts/CaviarDreams/CaviarDreams-Italic.ttf'
import CaviarDreamsItalicWOFF from '../assets/fonts/CaviarDreams/CaviarDreams-Italic.woff'
import CaviarDreamsItalicWOFF2 from '../assets/fonts/CaviarDreams/CaviarDreams-Italic.woff2'
import CaviarDreamsBoldEOT from '../assets/fonts/CaviarDreams/CaviarDreams-Bold.eot'
import CaviarDreamsBoldOTF from '../assets/fonts/CaviarDreams/CaviarDreams-Bold.otf'
import CaviarDreamsBoldTTF from '../assets/fonts/CaviarDreams/CaviarDreams-Bold.ttf'
import CaviarDreamsBoldWOFF from '../assets/fonts/CaviarDreams/CaviarDreams-Bold.woff'
import CaviarDreamsBoldWOFF2 from '../assets/fonts/CaviarDreams/CaviarDreams-Bold.woff2'
import CaviarDreamsBoldItalicEOT from '../assets/fonts/CaviarDreams/CaviarDreams-Bold-Italic.eot'
import CaviarDreamsBoldItalicOTF from '../assets/fonts/CaviarDreams/CaviarDreams-Bold-Italic.otf'
import CaviarDreamsBoldItalicTTF from '../assets/fonts/CaviarDreams/CaviarDreams-Bold-Italic.ttf'
import CaviarDreamsBoldItalicWOFF from '../assets/fonts/CaviarDreams/CaviarDreams-Bold-Italic.woff'
import CaviarDreamsBoldItalicWOFF2 from '../assets/fonts/CaviarDreams/CaviarDreams-Bold-Italic.woff2'

import KayakSansEOT from '../assets/fonts/KayakSans/KayakSans.eot'
import KayakSansOTF from '../assets/fonts/KayakSans/KayakSans.otf'
import KayakSansTTF from '../assets/fonts/KayakSans/KayakSans.ttf'
import KayakSansWOFF from '../assets/fonts/KayakSans/KayakSans.woff'
import KayakSansWOFF2 from '../assets/fonts/KayakSans/KayakSans.woff2'
import KayakSansItalicEOT from '../assets/fonts/KayakSans/KayakSans-RegularItalic.eot'
import KayakSansItalicOTF from '../assets/fonts/KayakSans/KayakSans-RegularItalic.otf'
import KayakSansItalicTTF from '../assets/fonts/KayakSans/KayakSans-RegularItalic.ttf'
import KayakSansItalicWOFF from '../assets/fonts/KayakSans/KayakSans-RegularItalic.woff'
import KayakSansItalicWOFF2 from '../assets/fonts/KayakSans/KayakSans-RegularItalic.woff2'
import KayakSansLightEOT from '../assets/fonts/KayakSans/KayakSans-Light.eot'
import KayakSansLightOTF from '../assets/fonts/KayakSans/KayakSans-Light.otf'
import KayakSansLightTTF from '../assets/fonts/KayakSans/KayakSans-Light.ttf'
import KayakSansLightWOFF from '../assets/fonts/KayakSans/KayakSans-Light.woff'
import KayakSansLightWOFF2 from '../assets/fonts/KayakSans/KayakSans-Light.woff2'
import KayakSansLightItalicEOT from '../assets/fonts/KayakSans/KayakSans-LightItalic.eot'
import KayakSansLightItalicOTF from '../assets/fonts/KayakSans/KayakSans-LightItalic.otf'
import KayakSansLightItalicTTF from '../assets/fonts/KayakSans/KayakSans-LightItalic.ttf'
import KayakSansLightItalicWOFF from '../assets/fonts/KayakSans/KayakSans-LightItalic.woff'
import KayakSansLightItalicWOFF2 from '../assets/fonts/KayakSans/KayakSans-LightItalic.woff2'
import KayakSansBoldEOT from '../assets/fonts/KayakSans/KayakSans-Bold.eot'
import KayakSansBoldOTF from '../assets/fonts/KayakSans/KayakSans-Bold.otf'
import KayakSansBoldTTF from '../assets/fonts/KayakSans/KayakSans-Bold.ttf'
import KayakSansBoldWOFF from '../assets/fonts/KayakSans/KayakSans-Bold.woff'
import KayakSansBoldWOFF2 from '../assets/fonts/KayakSans/KayakSans-Bold.woff2'
import KayakSansBoldItalicEOT from '../assets/fonts/KayakSans/KayakSans-BoldItalic.eot'
import KayakSansBoldItalicOTF from '../assets/fonts/KayakSans/KayakSans-BoldItalic.otf'
import KayakSansBoldItalicTTF from '../assets/fonts/KayakSans/KayakSans-BoldItalic.ttf'
import KayakSansBoldItalicWOFF from '../assets/fonts/KayakSans/KayakSans-BoldItalic.woff'
import KayakSansBoldItalicWOFF2 from '../assets/fonts/KayakSans/KayakSans-BoldItalic.woff2'

const fonts = [
  {
    name: 'CaviarDreams',
    style: 'normal',
    weight: 'normal',
    sources: [
      { file: CaviarDreamsEOT, format: 'eot' },
      { file: CaviarDreamsOTF, format: 'otf' },
      { file: CaviarDreamsTTF, format: 'ttf' },
      { file: CaviarDreamsWOFF, format: 'woff' },
      { file: CaviarDreamsWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'CaviarDreams-Italic',
    style: 'italic',
    weight: 'normal',
    sources: [
      { file: CaviarDreamsItalicEOT, format: 'eot' },
      { file: CaviarDreamsItalicOTF, format: 'otf' },
      { file: CaviarDreamsItalicTTF, format: 'ttf' },
      { file: CaviarDreamsItalicWOFF, format: 'woff' },
      { file: CaviarDreamsItalicWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'CaviarDreams-Bold',
    style: 'normal',
    weight: 'bold',
    sources: [
      { file: CaviarDreamsBoldEOT, format: 'eot' },
      { file: CaviarDreamsBoldOTF, format: 'otf' },
      { file: CaviarDreamsBoldTTF, format: 'ttf' },
      { file: CaviarDreamsBoldWOFF, format: 'woff' },
      { file: CaviarDreamsBoldWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'CaviarDreams-Bold-Italic',
    style: 'italic',
    weight: 'bold',
    sources: [
      { file: CaviarDreamsBoldItalicEOT, format: 'eot' },
      { file: CaviarDreamsBoldItalicOTF, format: 'otf' },
      { file: CaviarDreamsBoldItalicTTF, format: 'ttf' },
      { file: CaviarDreamsBoldItalicWOFF, format: 'woff' },
      { file: CaviarDreamsBoldItalicWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'KayakSans',
    style: 'normal',
    weight: 'normal',
    sources: [
      { file: KayakSansEOT, format: 'eot' },
      { file: KayakSansOTF, format: 'otf' },
      { file: KayakSansTTF, format: 'ttf' },
      { file: KayakSansWOFF, format: 'woff' },
      { file: KayakSansWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'KayakSans-Italic',
    style: 'italic',
    weight: 'normal',
    sources: [
      { file: KayakSansItalicEOT, format: 'eot' },
      { file: KayakSansItalicOTF, format: 'otf' },
      { file: KayakSansItalicTTF, format: 'ttf' },
      { file: KayakSansItalicWOFF, format: 'woff' },
      { file: KayakSansItalicWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'KayakSans-Light',
    style: 'normal',
    weight: 'normal',
    sources: [
      { file: KayakSansLightEOT, format: 'eot' },
      { file: KayakSansLightOTF, format: 'otf' },
      { file: KayakSansLightTTF, format: 'ttf' },
      { file: KayakSansLightWOFF, format: 'woff' },
      { file: KayakSansLightWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'KayakSans-LightItalic',
    style: 'italic',
    weight: 'lighter',
    sources: [
      { file: KayakSansLightItalicEOT, format: 'eot' },
      { file: KayakSansLightItalicOTF, format: 'otf' },
      { file: KayakSansLightItalicTTF, format: 'ttf' },
      { file: KayakSansLightItalicWOFF, format: 'woff' },
      { file: KayakSansLightItalicWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'KayakSans-Bold',
    style: 'normal',
    weight: 'bold',
    sources: [
      { file: KayakSansBoldEOT, format: 'eot' },
      { file: KayakSansBoldOTF, format: 'otf' },
      { file: KayakSansBoldTTF, format: 'ttf' },
      { file: KayakSansBoldWOFF, format: 'woff' },
      { file: KayakSansBoldWOFF2, format: 'woff2' }
    ]
  },
  {
    name: 'KayakSans-Bold-Italic',
    style: 'italic',
    weight: 'bold',
    sources: [
      { file: KayakSansBoldItalicEOT, format: 'eot' },
      { file: KayakSansBoldItalicOTF, format: 'otf' },
      { file: KayakSansBoldItalicTTF, format: 'ttf' },
      { file: KayakSansBoldItalicWOFF, format: 'woff' },
      { file: KayakSansBoldItalicWOFF2, format: 'woff2' }
    ]
  }
]

fonts.forEach((font) => {
  const src = font.sources.reduce((acc, currentFile, currentIndex) => {
    let str = `${acc} url(${currentFile.file}) format('${currentFile.format}')`
    if (currentIndex < (font.sources.length - 1)) {
      str += ','
    }
    return str
  }, '')

  injectGlobal`
    @font-face {
      font-family: ${font.name};
      font-style: ${font.style};
      font-weight: ${font.weight};
      src: ${src};
    }
  `
})
