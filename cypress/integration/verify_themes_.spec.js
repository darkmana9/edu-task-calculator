it('visits the app', () => {
  cy.visit('/#/settings')
})

describe('Verify themes changing', () => {
  it('change theme', () => {
      cy.verifyThemesChanging()
  })

})
