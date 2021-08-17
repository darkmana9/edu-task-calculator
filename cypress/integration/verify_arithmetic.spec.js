it('visits the app', () => {
  cy.visit('/#/')
})
afterEach(() => {
  cy.clearInput()
})
describe('Verify arithmetic operations', () => {
  it('verify add operation (+)', () => {
      cy.verifyAddOperation()
  })
  it('verify Div operation (/)', () => {
      cy.verifyDivOperation()
  })
  it('verify Sub operation (-)', () => {
      cy.verifySubOperation()
  })
  it('verify Mul operation (*)', () => {
      cy.verifyMulOperation()
  })
  it('verify Rem operation (%)', () => {
      cy.verifyRemOperation()
  })
})
