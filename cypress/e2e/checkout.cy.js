describe('TS.4 Checkout and Order Flow', () => {
  const user = { username: 'standard_user', password: 'secret_sauce' };

  beforeEach(() => {
    cy.login(user.username, user.password);
  });

  it('TC.4.1 Verify Checkout Button Disabled When Cart Is Empty', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').should('be.disabled');
  });

  it('TC.4.2 Verify Complete Checkout with Valid Information', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.fillCheckoutForm();
    cy.get('[data-test="continue"]').click();

    cy.get('.cart_item').should('have.length.at.least', 1);
    cy.get('[data-test="finish"]').click();

    cy.contains('Thank you for your order!').should('be.visible');

    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html');

    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('TC.4.3 Verify Error When First Name Is Missing', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="lastName"]').type('Pavardenis');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Error: First Name is required');
  });

  it('TC.4.4 Verify Error When Last Name Is Missing', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Vardenis');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Error: Last Name is required');
  });

  it('TC.4.5 Verify Error When Postal Code Is Missing', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Vardenis');
    cy.get('[data-test="lastName"]').type('Pavardenis');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Error: Postal Code is required');
  });

  it('TC.4.6 Verify Cancel on Information Returns to Cart', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="cancel"]').click();
    cy.url().should('include', '/cart.html');
  });

  it('TC.4.7 Verify Cancel on Overview Returns to Inventory', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.fillCheckoutForm();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="cancel"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('TC.4.8 Verify Back Home After Completing Checkout', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.fillCheckoutForm();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
