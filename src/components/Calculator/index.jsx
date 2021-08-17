import React from 'react'
import {Display} from "@/components/Calculator/Display"
import {History} from "@/components/Calculator/History"
import {Keypad} from "@/components/Calculator/Keypad"
import {CalculatorLayout} from "@/layouts"
import {ExpressionBuilder} from "@/components/Calculator/ExpressionBuilder"


function add(x, y) {
  return Math.round((x + y) * 1000) / 1000
}

function rem(x, y) {
  return Math.round((x % y) * 1000) / 1000
}

function revRem(x, y, value) {
  return Math.round((value * 1000) / 1000)
}

function revDiv(x, y, value) {
  return value
}

function sub(x, y) {
  return Math.round((x - y) * 1000) / 1000
}

function mul(x, y) {
  return Math.round((x * y) * 1000) / 1000
}

function div(x, y) {
  return Math.round((x / y) * 1000) / 1000
}

const Command = function (execute, undo, value) {
  this.execute = execute
  this.undo = undo
  this.value = value
}
const AddCommand = function (value) {
  return new Command(add, sub, value)
}

const RemCommand = function (value) {
  return new Command(rem, revRem, value)
}

const SubCommand = function (value) {
  return new Command(sub, add, value)
}

const MulCommand = function (value) {
  return new Command(mul, div, value)
}

const DivCommand = function (value) {
  return new Command(div, revDiv, value)
}

class CalculatorF {
  current = 0
  commands = []
  prev = 0

  execute(command) {
    this.prev = this.current
    this.current = command.execute(this.current, command.value)
    this.commands.push(command)
  }

  undo() {
    const command = this.commands.pop()
    this.current = command.undo(this.current, command.value)
  }

  getPrevValue() {
    const temp = this.commands.slice()
    const command = temp.pop()
    if (command) {
      return command.undo(this.current, command.value, this.prev)
    } else {
      return null
    }
  }

  getCurrentValue() {
    return this.current
  }

  setFirstInputValue(val) {
    this.current = val
  }

  reset() {
    this.current = 0
    this.commands = []
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
      expressionBuilder: [],
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
          switch (this.state.currentOperation) {
            case "+": {
              this.calculator.execute(new AddCommand(+this.state.inputValue))
              break
            }
            case "%": {
              this.calculator.execute(new RemCommand(+this.state.inputValue))
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
      switch (operation) {
        case "CE": {
          this.setState({
            inputValue: '',
          })
          break
        }
        case "C": {
          this.calculator.reset()
          this.firstInputValue = 0
          this.setState({
            inputValue: '',
            expressionBuilder: [],
          })
          break
        }
        case "=": {
          this.handleOperationsButton(null, this.state.currentOperation)
          this.firstInputValue = 0
          this.inputFlag = 0
          break
        }
        case "CS": {
          if (this.state.inputValue[0] === "-") {
            this.setState(prevState => {
              return {
                inputValue: prevState.inputValue.slice(1),
              }
            })
          } else {
            this.setState(prevState => {
              return {
                inputValue: '-' + prevState.inputValue,
              }
            })
          }
          break
        }
      }
    }
  }


  render() {
    return (
      <CalculatorLayout>
        <Display inputValue={this.state.inputValue}/>
        <History history={this.state.history}/>
        <Keypad
          onHandleSimpleOperationsButton={this.handleSimpleOperationsButton}
          onHandleOperationsButton={this.handleOperationsButton}
          onHandleNumbersButtons={this.handleNumbersButtons}/>
        <ExpressionBuilder expression={this.state.expressionBuilder}/>
      </CalculatorLayout>
    )
  }

  componentDidMount() {
    this.calculator = new CalculatorF()
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
