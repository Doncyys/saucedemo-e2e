describe('TS.6 Negative & Edge Case Scenarios', () => {
  const user = { username: 'standard_user', password: 'secret_sauce' };

  beforeEach(() => {
    cy.login(user.username, user.password);
    cy.get('.inventory_item').first().contains('Add to cart').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('TC.6.1 Verify Emoji Only in Name Fields', () => {
    cy.get('[data-test="firstName"]').clear().type('🚀🔥😊');
    cy.get('[data-test="lastName"]').clear().type('🎉💥😜');
    cy.get('[data-test="postalCode"]').clear().type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Error');
  });

  it('TC.6.2 Verify Whitespace Only in Input Fields', () => {
    cy.get('[data-test="firstName"]').clear().type('   ');
    cy.get('[data-test="lastName"]').clear().type('   ');
    cy.get('[data-test="postalCode"]').clear().type('   ');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Error');
  });

  it('TC.6.3 Verify Overly Long Strings Are Rejected', () => {
    const long300 = 'a'.repeat(300);
    const long20 = '1'.repeat(20);
    cy.get('[data-test="firstName"]').clear().type(long300);
    cy.get('[data-test="lastName"]').clear().type(long300);
    cy.get('[data-test="postalCode"]').clear().type(long20);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Error');
  });

  it('TC.6.4 Verify Non-Numeric Postal Codes Are Rejected', () => {
    cy.get('[data-test="firstName"]').clear().type('Alice');
    cy.get('[data-test="lastName"]').clear().type('Wonderland');
    cy.get('[data-test="postalCode"]').clear().type('ABC-@#%');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Error');
  });
});
