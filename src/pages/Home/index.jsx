import React, {Profiler} from 'react'

import {PageLayout} from '@/layouts'
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
  const onRenderCallback = (id,
                            phase,
                            actualDuration,
                            baseDuration,
                            startTime,
                            commitTime,
                            interactions) => {
   /* console.log(`id: ${id} phase: ${phase} actualDuration: ${actualDuration} baseDuration:${baseDuration}
                startTime: ${startTime} commitTime: ${commitTime}  interactions: ${interactions}`)*/
  }
  return (
    <PageLayout>
      <ErrorBoundary>
        <Profiler id="calculator" onRender={onRenderCallback}>
          <Calculator/>
        </Profiler>
      </ErrorBoundary>
    </PageLayout>
  )
}
