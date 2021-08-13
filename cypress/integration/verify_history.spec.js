it('visits the app', () => {
  cy.visit('/')
})

describe('Verify arithmetic operations', () => {
  it('verify history adding and clearing', () => {
      cy.verifyHistoryAddingAndClearing()
  })


})
