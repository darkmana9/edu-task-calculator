import React from 'react'
import {Display} from "@/components/Calculator/Display"
import {History} from "@/components/Calculator/History"
import {Keypad} from "@/components/Calculator/Keypad"
import {CalculatorLayout} from "@/layouts"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        hasError: false,
        error: '',
        errorInfo: '',
      }
    }

    static getDerivedStateFromError(){
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
      if(this.state.hasError){
        return <h1>Error: {this.state.error}, error info: {this.state.errorInfo}</h1>
      }
      return this.props.children
    }

}

export class Calculator extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  handleNumbersButtons = text => {
    this.setState(prevState => {
      return {
        inputValue: prevState.inputValue + text,
      }
    })
  }

  render() {
    return (
      <CalculatorLayout>
        <ErrorBoundary>
        <Display inputValue={this.state.inputValue}/>
        <History/>
        <Keypad handleNumbersButtons={this.handleNumbersButtons}/>
        </ErrorBoundary>
      </CalculatorLayout>
    )
  }


}
