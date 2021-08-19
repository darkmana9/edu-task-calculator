
export const doSimpleOperation = (operation,
                                  currentOperation,
                                  inputValue,
                                  firstInputValue,
                                  expressionBuilder,
                                  inputFlag,
                                  calculator,
                                  handleOperationsButton) => {
  switch (operation) {
    case "CE": {
      inputValue = ''
      break
    }
    case "C": {
      calculator.reset()
      firstInputValue = 0
      inputValue = ''
      expressionBuilder = []
      break
    }
    case "=": {
      handleOperationsButton(null, currentOperation)
      firstInputValue = 0
      inputFlag = 1
      break
    }
    case "CS": {
      if (inputValue[0] === "-") {
            inputValue = inputValue.slice(1)
      } else {
            inputValue = '-' + inputValue
        }
      break
      }
  }
  return {inputValue, firstInputValue, expressionBuilder, inputFlag, calculator}
}
