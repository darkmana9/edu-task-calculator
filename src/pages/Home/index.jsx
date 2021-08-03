import React from 'react'

import { PageLayout } from '@/layouts'


import { Card, Heading } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Heading id="welcome">Welcome!</Heading>
      </Card>
    </PageLayout>
  )
}
