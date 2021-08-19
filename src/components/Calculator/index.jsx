import React from 'react'

import { Display } from "@/components/Calculator/Display"
import { History } from "@/components/Calculator/History"
import { Keypad } from "@/components/Calculator/Keypad"
import { CalculatorLayout } from "@/layouts"
import { ExpressionBuilder } from "@/components/Calculator/ExpressionBuilder"
import { CalculatorPattern } from "@/services/calculatorPattern"
import { doSimpleOperation } from "@/services/simpleOperations"

export class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.firstInputValue = 0
    this.inputFlag = 0
    this.state = {
      inputValue: '',
      currentOperation: '',
      history: [],
      expressionBuilder: [],
    }
  }

  handleOperationsButton = (e, currOperation) => {
    const operation = e ? e.target.innerText : currOperation
    if (operation.match(/[0-9.]/)) {
      if (this.inputFlag === 1) {
        this.inputFlag = 0
        this.setState({
          inputValue: '',
        })
      }
      this.setState(prevState => {
        return {
          inputValue: prevState.inputValue + operation,
        }
      })
    } else if (operation.match(/[+-/*%]/)) {
      if (this.state.inputValue !== '' && this.inputFlag === 0) {
        if (this.firstInputValue === 0) {
          this.firstInputValue = this.state.inputValue
          this.calculator.setFirstInputValue(+this.firstInputValue)
          this.setState({
            expressionBuilder: [this.firstInputValue],
          })
        } else {
          this.calculator.doMathOperation(this.state.currentOperation, this.state.inputValue)
          this.setState(prevState => {
            return {
              expressionBuilder: prevState.expressionBuilder.concat(` ${this.state.currentOperation} ${this.state.inputValue}`),
              history: prevState.history.concat(`${this.calculator.getPrevValue()} ${this.state.currentOperation} ${this.state.inputValue}  \n`),
              inputValue: this.calculator.getCurrentValue(),
            }
          })
          this.inputFlag = 1
        }
        if (this.inputFlag === 0) {
          this.inputFlag = 1
          this.setState({
            inputValue: '',
          })
        }
        this.setState({
          currentOperation: operation,
        })
      }
    } else if (operation.match(/[C=]/)) {
      const result = doSimpleOperation(
        operation,
        this.state.currentOperation,
        this.state.inputValue,
        this.firstInputValue,
        this.state.expressionBuilder,
        this.inputFlag,
        this.calculator,
        this.handleOperationsButton)
      if(operation !== '='){
        this.setState({
          inputValue: result.inputValue,
          expressionBuilder: result.expressionBuilder,
        })

      }
      this.inputFlag = result.inputFlag
      this.firstInputValue = result.firstInputValue
    }
  }

  render() {
    return (
      <CalculatorLayout>
        <Display inputValue={this.state.inputValue}/>
        <History history={this.state.history}/>
        <Keypad onHandleOperationsButton={this.handleOperationsButton}/>
        <ExpressionBuilder expression={this.state.expressionBuilder}/>
      </CalculatorLayout>
    )
  }

  componentDidMount() {
    this.calculator = new CalculatorPattern()
    const lastClear = localStorage.getItem('lastClear')
    const timeNow = (new Date()).getTime()
    if ((timeNow - lastClear) > 1000 * 60 * 60 * 24) {
      localStorage.clear()
      localStorage.setItem('lastClear', timeNow)
    } else {
      if (localStorage.getItem('stringHistory')) {
        const history = JSON.parse(localStorage.getItem('stringHistory'))
        this.setState({
          history: history,
        })
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.history !== this.state.history) {
      localStorage.setItem("stringHistory", JSON.stringify(this.state.history))
    }
  }

  componentWillUnmount() {
    localStorage.setItem("stringHistory", JSON.stringify(this.state.history))
  }

}
