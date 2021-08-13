const calculatorScreen = {
  calculatorComponent: {
    idLocator: "#cwmcwd",
  },
  input: {
    get: 'input[type="text"]',
  },
  history: {
    get: 'textarea',
  },
}


const numbers = {
  zero: {
    value: '0',
  },
  one: {
    value: '1',
  },
  two: {
    value: '2',
  },
  three: {
    value: '3',
  },
  four: {
    value: '4',
  },
  five: {
    value: '5',
  },
  six: {
    value: '6',
  },
  seven: {
    value: '7',
  },
  eight: {
    value: '8',
  },
  nine: {
    value: '9',
  },
  deleteCE: {},
  deleteAC: {
    idLocator: "#cwclrbtnAC",
  },
  divide: {
    value: "/",

  },
  multiply: {
    value: "*",

  },
  subtract: {
    value: "-",
  },
  add: {
    value: "+",
  },
  result: {},
  point: {
    value: ".",
  },
}

module.exports = {
  numbers,
  calculatorScreen,
}
