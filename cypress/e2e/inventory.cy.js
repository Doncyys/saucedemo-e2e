describe('TS.2 Product Browsing and Sorting', () => {
  const user = { username: 'standard_user', password: 'secret_sauce' };

  beforeEach(() => {
    cy.login(user.username, user.password);
  });

  it('TC.2.1 Verify Inventory Page Static Elements Are Loaded', () => {
    cy.get('#react-burger-menu-btn').should('be.visible');
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    cy.get('.app_logo').should('be.visible');
    cy.get('.footer_copy').contains(' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
  });

  it('TC.2.2 Verify Inventory Items Display Correctly', () => {
    cy.get('.inventory_item').should('have.length.at.least', 6);
    cy.get('.inventory_item').each(($el) => {
      cy.wrap($el).find('.inventory_item_name').should('be.visible');
      cy.wrap($el).find('.inventory_item_img').should('be.visible');
      cy.wrap($el).find('.inventory_item_price').should('be.visible');
    });
  });

  it('TC.2.3 Verify Product Detail Page Loads When Clicking Product Name', () => {
    cy.get('.inventory_item_name').first().click();
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('be.visible');
    cy.get('.inventory_details_img').should('be.visible');
    cy.get('.inventory_details_desc').should('be.visible');
    cy.get('.inventory_details_price').should('be.visible');
    cy.get('#back-to-products').should('be.visible');
  });

  it('TC.2.4 Verify Product Detail Page Loads When Clicking Product Image', () => {
    cy.get('.inventory_item_img').first().click();
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('be.visible');
    cy.get('.inventory_details_img').should('be.visible');
    cy.get('.inventory_details_desc').should('be.visible');
    cy.get('.inventory_details_price').should('be.visible');
    cy.get('#back-to-products').should('be.visible');
  });

  it('TC.2.5 Verify Back to Products Functionality', () => {
    cy.get('.inventory_item_name').first().click();
    cy.get('#back-to-products').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('TC.2.6 Verify Sorting By Name A to Z', () => {
    cy.get('[data-test="product-sort-container"]').select('az');
    cy.get('.inventory_item_name').then((names) => {
      const texts = [...names].map(el => el.innerText);
      const sorted = [...texts].sort();
      expect(texts).to.deep.equal(sorted);
    });
  });

  it('TC.2.7 Verify Sorting By Name Z to A', () => {
    cy.get('[data-test="product-sort-container"]').select('za');
    cy.get('.inventory_item_name').then((names) => {
      const texts = [...names].map(el => el.innerText);
      const sorted = [...texts].sort().reverse();
      expect(texts).to.deep.equal(sorted);
    });
  });

  it('TC.2.8 Verify Sorting By Price Low to High', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.get('.inventory_item_price').then((prices) => {
      const values = [...prices].map(el => parseFloat(el.innerText.replace('$', '')));
      const sorted = [...values].sort((a, b) => a - b);
      expect(values).to.deep.equal(sorted);
    });
  });

  it('TC.2.9 Verify Sorting By Price High to Low', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo');
    cy.get('.inventory_item_price').then((prices) => {
      const values = [...prices].map(el => parseFloat(el.innerText.replace('$', '')));
      const sorted = [...values].sort((a, b) => b - a);
      expect(values).to.deep.equal(sorted);
    });
  });

  it('TC.2.10 Verify Hamburger Menu Functionality', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('.bm-item-list').within(() => {
      cy.contains('All Items').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Logout').should('be.visible');
      cy.contains('Reset App State').should('be.visible');
    });
    cy.get('#react-burger-cross-btn').click();
    cy.get('.bm-item-list').should('be.visible');
  });

  it('TC.2.11 Verify Twitter Link in Footer', () => {
    cy.get('[data-test="social-twitter"]')
      .should('have.attr', 'href')
      .and('match', /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/saucelabs/);
  });

  it('TC.2.12 Verify Facebook Link in Footer', () => {
    cy.get('[data-test="social-facebook"]')
      .should('have.attr', 'href')
      .and('match', /^(https?:\/\/)?(www\.)?facebook\.com\/saucelabs/);
  });

  it('TC.2.13 Verify LinkedIn Link in Footer', () => {
    cy.get('[data-test="social-linkedin"]')
      .should('have.attr', 'href')
      .and('match', /^(https?:\/\/)?(www\.)?linkedin\.com\/company\/sauce-labs/);
  });

  it('TC.2.14 Verify About Link in Hamburger Menu', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#about_sidebar_link')
      .should('have.attr', 'href', 'https://saucelabs.com/');
  });
});
