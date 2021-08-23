export const doSystemicOperation = ({
                                    operation,
                                    currentOperation,
                                    inputValue,
                                    initialInputValue,
                                    expressionBuilder,
                                    clearInput,
                                    calculator,
                                    handleOperationsButton,
                                  }) => {
  switch (operation) {
    case "CE": {
      inputValue = ''
      break
    }
    case "C": {
      calculator.reset()
      initialInputValue = 0
      inputValue = ''
      expressionBuilder = []
      break
    }
    case "=": {
      handleOperationsButton(null, currentOperation)
      initialInputValue = 0
      clearInput = 1
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
  return {inputValue, initialInputValue, expressionBuilder, clearInput, calculator}
}
