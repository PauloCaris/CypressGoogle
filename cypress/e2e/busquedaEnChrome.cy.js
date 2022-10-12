describe('Search Wikipedio on google with chrome', () => {
  it('visit', () => {
    cy.visit('https://www.google.cl/')
    cy.get('.gLFyf').type('automatización')
    cy.get('#gb').click()
    cy.get('.FPdoLc > center > .gNO89b').click()
    cy.contains('Wikipedia').click()
    cy.screenshot()
    cy.get(':nth-child(14)').should('have.text', 'En 1801, la patente de un telar automático utilizando tarjetas perforadas fue dada a Joseph Marie Jacquard, quien revolucionó la Industria textil.\n')
    cy.screenshot()
  })
})