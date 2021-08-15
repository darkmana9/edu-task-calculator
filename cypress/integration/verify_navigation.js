it('visits the app', () => {
  cy.visit('/')
})

describe('Verify navigation', () => {
  it('go to settings page', () => {
      cy.verifyNavigation()
  })

})
