describe('TS.1 Login and Authentication', () => {
    beforeEach(() => {
        cy.visit('/');
    });

  it('TC.1.1 Verify Login Page UI Elements Are Loaded', () => {
    cy.get('.login_logo').should('be.visible');              
    cy.get('#user-name').should('be.visible');             
    cy.get('#password').should('be.visible');              
    cy.get('#login-button').should('be.visible');          
    cy.get('#login_credentials').should('be.visible');
    cy.get('[data-test="login-password"]').should('be.visible');
  });

  it('TC.1.2 Verify Successful Login with Valid Credentials', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('TC.1.3 Verify Login Fails with Incorrect Password', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('TC.1.4 Verify Login Fails with Incorrect Username', () => {
    cy.get('#user-name').type('wrong_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('TC.1.5 Verify Login Fails When No Credentials Provided', () => {
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('TC.1.6 Verify Login Fails When No Username Provided', () => {
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('TC.1.7 Verify Login Fails When No Password Provided', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });

  it('TC.1.8 Verify Locked Out User Cannot Login', () => {
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('TC.1.9 Verify Unauthenticated Access to Inventory Redirects to Login', () => {
    cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false }); // status code 404 expected?
    cy.wait(1000);
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', `Epic sadface: You can only access '/inventory.html' when you are logged in.`);
  });

});
