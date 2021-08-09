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

function add(x, y) {
  return x + y
}

function sub(x, y) {
  return x - y
}

function mul(x, y) {
  return x * y
}

function div(x, y) {
  return x / y
}

const Command = function (execute, undo, value) {
  this.execute = execute
  this.undo = undo
  this.value = value
}
const AddCommand = function (value) {
  return new Command(add, sub, value)
}

const SubCommand = function (value) {
  return new Command(sub, add, value)
}

const MulCommand = function (value) {
  return new Command(mul, div, value)
}

const DivCommand = function (value) {
  return new Command(div, mul, value)
}
const CalculatorF = function () {
  let current = 0
  const commands = []
  return {
    execute: function (command) {
      current = command.execute(current, command.value)
      commands.push(command)
    },
    undo: function () {
      const command = commands.pop()
      current = command.undo(current, command.value)
    },
    getPrevValue: function () {
      const temp = commands.slice()
      const command = temp.pop()
      return command.undo(current, command.value)
    },
    getCurrentValue: function () {
      return current
    },
    getCommands: function () {
      return commands
    },
    setFirstInputValue: function (val) {
      current = val
    },
  }
}


export class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.firstInputValue = 0
    this.inputFlag = 0
    this.state = {
      inputValue: '',
      currentOperation: '',
      history: [],
      operationInputValue: '',
    }
  }

  handleNumbersButtons = text => {
    if (this.inputFlag === 1) {
      this.inputFlag = 0
      this.setState({
        inputValue: '',
      })
    }
    this.setState(prevState => {
      return {
        inputValue: prevState.inputValue + text,
      }
    })
  }

  handleSimpleOperationsButton = operation => {
      switch (operation){
        case "CE": {
          this.setState({
            inputValue: '',
          })
        }
      }
  }

  handleOperationsButton = operation => {
    if (!isNaN(this.state.inputValue) || this.state.inputValue !== '') {
      if (this.firstInputValue === 0) {
        this.firstInputValue = this.state.inputValue
        this.calculator.setFirstInputValue(+this.firstInputValue)
      } else {
        switch (this.state.currentOperation) {
          case "+": {
            this.calculator.execute(new AddCommand(+this.state.inputValue))
            break
          }
          case "-": {
            this.calculator.execute(new SubCommand(+this.state.inputValue))
            break
          }
          case "*": {
            this.calculator.execute(new MulCommand(+this.state.inputValue))
            break
          }
          case "/": {
            this.calculator.execute(new DivCommand(+this.state.inputValue))
            break
          }
        }
        this.setState(prevState => {
          return {
            history: prevState.history.concat(`${this.calculator.getPrevValue()} ${this.state.currentOperation} ${this.state.inputValue}  \n`),
          }
        })
        this.setState({
          inputValue: this.calculator.getCurrentValue(),
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
  }


  render() {
    return (
      <CalculatorLayout>
        <ErrorBoundary>
          <Display inputValue={this.state.inputValue}/>
          <History history={this.state.history}/>

          <Keypad handleSimpleOperationsButton={this.handleSimpleOperationsButton} handleOperationsButton={this.handleOperationsButton} handleNumbersButtons={this.handleNumbersButtons}/>
        </ErrorBoundary>
      </CalculatorLayout>
    )
  }

  componentDidMount() {
    this.calculator = new CalculatorF()
  }

}
