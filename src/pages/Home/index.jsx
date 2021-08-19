import React from 'react'

import { PageLayout } from '@/layouts'
import { Calculator } from "@/components/Calculator"
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"

export default () => {
  return (
    <PageLayout>
      <ErrorBoundary>
        <Calculator/>
      </ErrorBoundary>
    </PageLayout>
  )
}
