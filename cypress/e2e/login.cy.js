describe('Login Test', () => {

  it('logs in successfully with valid credentials', () => {
    cy.visit('http://localhost:5173/adminlogin');

    cy.get('input[name=email]').type('admin@gmail.com');
    cy.get('input[name=password]').type('12345');
    cy.get('button.btn-success').click();

    cy.url({ timeout: 10000 }).should('include', '/dashboard');
    cy.wait(1000) 
  });

  it('does not login with wrong password', () => {
    cy.visit('http://localhost:5173/adminlogin');

    cy.get('input[name=email]').type('admin@gmail.com');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('button.btn-success').click();

    // Kontrollo që URL nuk ndryshon në dashboard
    cy.url().should('not.include', '/dashboard');

    // Kontrollo nëse shfaqet mesazhi i gabimit
    cy.get('.text-warning').should('be.visible');
    cy.wait(1000) 
  });

  it('does not login with empty email', () => {
    cy.visit('http://localhost:5173/adminlogin');

    // Email bosh
    cy.get('input[name=password]').type('12345');
    cy.get('button.btn-success').click();

    cy.url().should('not.include', '/dashboard');

    // Kontrollo validimin për email
    cy.get('.text-warning').should('be.visible');
    cy.wait(1000) 
  });

  it('does not login with empty password', () => {
    cy.visit('http://localhost:5173/adminlogin');

    cy.get('input[name=email]').type('admin@gmail.com');
    // Password bosh
    cy.get('button.btn-success').click();

    cy.url().should('not.include', '/dashboard');

    // Kontrollo validimin për password
    cy.get('.text-warning').should('be.visible');
    cy.wait(1000) 
  });

});