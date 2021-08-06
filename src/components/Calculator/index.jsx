import React from 'react'
import {Display} from "@/components/Calculator/Display"
import {History} from "@/components/Calculator/History"
import {Keypad} from "@/components/Calculator/Keypad"
import {CalculatorLayout} from "@/layouts"


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
        <Display inputValue={this.state.inputValue}/>
        <History/>
        <Keypad handleNumbersButtons={this.handleNumbersButtons}/>
      </CalculatorLayout>
    )
  }


}
