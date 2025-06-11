describe('TS.3 Cart Operations', () => {
  const user = { username: 'standard_user', password: 'secret_sauce' };

  beforeEach(() => {
    cy.login(user.username, user.password);
  });

  it('TC.3.1 Verify Adding Single Product to Cart from Inventory', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('TC.3.2 Verify Removing Product from Cart on Inventory Page', () => {
    cy.get('.inventory_item').first().within(() => {
      cy.contains('Add to cart').click();
      cy.contains('Remove').click();
    });
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('TC.3.3 Verify Adding Multiple Products to Cart', () => {
    cy.get('.inventory_item').eq(0).within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.inventory_item').eq(1).within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_badge').should('have.text', '2');
  });

  it('TC.3.4 Verify Cart Persistence on Page Refresh', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.reload();
    cy.get('.cart_item').should('have.length', 1);
  });

  it('TC.3.5 Verify Cart Page Displays Correct Items', () => {
    const names = [];

    cy.get('.inventory_item_name').eq(0).invoke('text').then(text => names.push(text));
    cy.get('.inventory_item_name').eq(1).invoke('text').then(text => names.push(text));
    cy.get('.inventory_item_name').eq(2).invoke('text').then(text => names.push(text));

    cy.get('.inventory_item').eq(0).within(() => cy.contains('Add to cart').click());
    cy.get('.inventory_item').eq(1).within(() => cy.contains('Add to cart').click());
    cy.get('.inventory_item').eq(2).within(() => cy.contains('Add to cart').click());

    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 3).each(($el, i) => {
      cy.wrap($el).find('.inventory_item_name').should('have.text', names[i]);
    });
  });

  it('TC.3.6 Verify Adding Product to Cart from Detail Page', () => {
    cy.get('.inventory_item_name').first().click();
    cy.get('button').contains('Add to cart').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('TC.3.7 Verify Removing Product from Cart on Detail Page', () => {
    cy.get('.inventory_item_name').first().click();
    cy.get('button').contains('Add to cart').click();
    cy.get('button').contains('Remove').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('TC.3.8 Verify Continue Shopping from Cart Page', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('TC.3.9 Verify Removing Product from Cart on Cart Page', () => {
    cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').first().within(() => cy.contains('Remove').click());
    cy.get('.cart_item').should('have.length', 0);
    cy.get('.shopping_cart_badge').should('not.exist');
  });

});
