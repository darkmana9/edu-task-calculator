import React from 'react'

import { PageLayout } from '@/layouts'
import {Header} from "@/components/Header"
import {Calculator} from "@/components/Calculator"

export default () => {
  return (
    <PageLayout>
      <Header/>
      <Calculator/>
    </PageLayout>
  )
}
