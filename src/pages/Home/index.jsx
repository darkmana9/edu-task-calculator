import React from 'react'

import { PageLayout } from '@/layouts'
import {Calculator} from "@/components/Calculator"
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      error: '',
      errorInfo: '',
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error: {this.state.error}, error info: {this.state.errorInfo}</h1>
    }
    return this.props.children
  }

}
export default () => {
  return (
    <PageLayout>
      <ErrorBoundary>
        <Calculator/>
      </ErrorBoundary>
    </PageLayout>
  )
}
