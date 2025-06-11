describe('TS.5 Logout and Session Management', () => {
    const user = { username: 'standard_user', password: 'secret_sauce' };
    beforeEach(() => {
        cy.login(user.username, user.password);
    });

    it('TC.5.1 Verify Logout From Inventory Page', () => {
        cy.logout();
    });

    it('TC.5.2 Verify Logout From Cart Page', () => {
        cy.get('.shopping_cart_link').click();
        cy.logout();
    });

    it('TC.5.3 Verify Logout From Checkout: Your Information Page', () => {
        cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.logout();
    });

    it('TC.5.4 Verify Logout From Checkout: Overview Page', () => {
        cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.fillCheckoutForm();
        cy.get('[data-test="continue"]').click();
        cy.logout();
    });

    it('TC.5.5 Verify Back Button Behavior After Logout', () => {
        cy.logout();
        cy.go('back');
        cy.url().should('include', '/');
        cy.get('[data-test="error"]').should('contain.text', `Epic sadface: You can only access '/inventory.html' when you are logged in.`);
    });

    it('TC.5.6 Verify Cart Persists After Logout', () => {
        cy.get('.inventory_item').first().within(() => cy.contains('Add to cart').click());
        cy.get('.shopping_cart_badge').should('have.text', '1');
        cy.logout();
        cy.login(user.username, user.password);
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });
    
});