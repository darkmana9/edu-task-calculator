import {numbers} from "../support/objects"


describe("Verify that the user is able to input numbers", () => {
  it("Visit Home", () => {
    cy.visit("/")
    cy.wait(150)
  })
  afterEach(() => {
    cy.clearInput()
  })
  it("Should Click button 1 and CE", () => {
    cy.verifyNumberButtonInput(numbers.one.value)
    cy.verifyClearInput()
  })
  it("Should Click button 2", () => {
    cy.verifyNumberButtonInput(numbers.two.value)
  })
  it("Should Click button 3", () => {
    cy.verifyNumberButtonInput(numbers.three.value)
  })
  it("Should Click button 4", () => {
    cy.verifyNumberButtonInput(numbers.four.value)
  })
  it("Should Click button 5", () => {
    cy.verifyNumberButtonInput(numbers.five.value)
  })
  it("Should Click button 6", () => {
    cy.verifyNumberButtonInput(numbers.six.value)
  })
  it("Should Click button 7", () => {
    cy.verifyNumberButtonInput(numbers.seven.value)
  })
  it("Should Click button 8", () => {
    cy.verifyNumberButtonInput(numbers.eight.value)
  })
  it("Should Click button 9", () => {
    cy.verifyNumberButtonInput(numbers.nine.value)
  })
  it("Should Click button 0", () => {
    cy.verifyNumberButtonInput(numbers.zero.value)
  })
  it("Should Click button .", () => {
    cy.verifyNumberButtonInput(numbers.point.value)
  })
  it('should Click button C', () => {
    cy.verifyClearAllButton()
  })
  it('should Click button CS', () => {
    cy.verifyChangeSignButton()
  })
})
