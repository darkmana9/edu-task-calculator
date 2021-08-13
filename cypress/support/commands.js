import {calculatorScreen} from "./objects"

Cypress.Commands.add("verifyNumberButtonInput", numberValue => {
  cy.get('button').contains(numberValue).click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    numberValue,
  )
})

Cypress.Commands.add("verifyClearInput", () => {
  cy.wait(100)
  cy.get('button').contains('1').click({force: true})
  cy.contains('CE').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '',
  )
})

Cypress.Commands.add("verifyChangeSignButton", () => {
  cy.wait(100)
  cy.get('button').contains('1').click({force: true})
  cy.get('button').contains('CS').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '-1',
  )
  cy.get('button').contains('CS').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '1',
  )
})

Cypress.Commands.add("verifyClearAllButton", () => {
  cy.wait(100)
  cy.get('button').contains('1').click({force: true})
  cy.get('button').contains('+').click({force: true})
  cy.get('button').contains('1').click({force: true})
  cy.get('button').contains('=').click({force: true})
  cy.get('div#expressionBuilder').should(
    "be.visible",
  )
  cy.get('button').contains('C').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '',
  )
  cy.get('div#expressionBuilder').should(
    'not.have.value',
    '1+1',
  )
})

Cypress.Commands.add("clearInput", () => {
  cy.wait(100)
  cy.get('button').contains('CE').click({force: true})
})


Cypress.Commands.add("verifyAddOperation", () => {
  cy.wait(100)
  const commands = '1+1+'.split('')
  commands.forEach(command => {
    cy.get('button').contains(command).click({force: true})
  })
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '2',
  )
  cy.get('button').contains('3').click({force: true})
  cy.get('button').contains('=').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '5',
  )
})

Cypress.Commands.add("verifyDivOperation", () => {
  cy.wait(100)
  const commands = '100/10/'.split('')
  commands.forEach(command => {
    cy.get('button').contains(command).click({force: true})
  })
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '10',
  )
  cy.get('button').contains('2').click({force: true})
  cy.get('button').contains('=').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '5',
  )
})

Cypress.Commands.add("verifyMulOperation", () => {
  cy.wait(100)
  const commands = '10*10*'.split('')
  commands.forEach(command => {
    cy.get('button').contains(command).click({force: true})
  })
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '100',
  )
  cy.get('button').contains('2').click({force: true})
  cy.get('button').contains('=').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '200',
  )
})

Cypress.Commands.add("verifySubOperation", () => {
  cy.wait(100)
  const commands = '100-50-'.split('')
  commands.forEach(command => {
    cy.get('button').contains(command).click({force: true})
  })
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '50',
  )
  cy.get('button').contains('5').click({force: true})
  cy.get('button').contains('=').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '45',
  )
})

Cypress.Commands.add("verifyRemOperation", () => {
  cy.wait(100)
  const commands = '10%3'.split('')
  commands.forEach(command => {
    cy.get('button').contains(command).click({force: true})
  })
  cy.get('button').contains('=').click({force: true})
  cy.get(calculatorScreen.input.get).should(
    "have.value",
    '1',
  )
})


Cypress.Commands.add("verifyHistoryAddingAndClearing", () => {
  cy.wait(100)
  const commands = '1+1*4+3+1='.split('')
  commands.forEach(command => {
    cy.get('button').contains(command).click({force: true})
  })
  cy.get(calculatorScreen.history.get).should(
    "have.value",
    '1 + 1  \n' +
    '2 * 4  \n' +
    '8 + 3  \n' +
    '11 + 1  \n',
  ).then(() => {
    expect(localStorage.getItem('stringHistory')).to.eq('["1 + 1  \\n","2 * 4  \\n","8 + 3  \\n","11 + 1  \\n"]')
  })
  cy.visit('/settings')
  cy.get('button').contains('Clear all history').click({force: true})
  cy.visit('/')
  cy.get(calculatorScreen.history.get).should(
    "have.value",
    '',
  ).then(() => {
    expect(localStorage.getItem('stringHistory')).to.eq(null)
  })


})


