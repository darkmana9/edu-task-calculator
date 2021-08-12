import React from 'react'

import { Loader } from './components'

const LOADER_SIZE = 100

export default () => {
  return (
    <Loader
      type="Bars"
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
