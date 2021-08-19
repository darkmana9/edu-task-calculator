import { add, mul, sub, rem, revRem, div, revDiv } from '@/helpers'

const Command = function (execute, undo, value) {
  this.execute = execute
  this.undo = undo
  this.value = value
}
export const commands = {
  Add: value => new Command(add, sub, value),
  Rem: value => new Command(rem, revRem, value),
  Sub: value => new Command(sub, add, value),
  Mul: value => new Command(mul, div, value),
  Div: value => new Command(div, revDiv, value),
}

export class CalculatorPattern {
  current = 0
  commands = []
  prev = 0

  doMathOperation(currentOperation, inputValue) {
    switch (currentOperation) {
      case "+": {
        this.execute(new commands.Add(+inputValue))
        break
      }
      case "%": {
        this.execute(new commands.Rem(+inputValue))
        break
      }
      case "-": {
        this.execute(new commands.Sub(+inputValue))
        break
      }
      case "*": {
        this.execute(new commands.Mul(+inputValue))
        break
      }
      case "/": {
        this.execute(new commands.Div(+inputValue))
        break
      }
    }
  }

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





