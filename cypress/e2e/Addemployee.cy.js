describe('Add Employee Form - Invalid Data', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.window().then((win) => {
      win.localStorage.setItem('valid', 'true');
    });

    cy.visit('http://localhost:5173/dashboard/add_employee');
  });

  it('shows error when name is missing', () => {
    cy.get('#inputName').should('have.value', '');

    cy.get('#inputEmail4').type('test.employee@example.com');
    cy.get('#inputPassword4').type('password123');
    cy.get('#inputSalary').type('5000');
    cy.get('#inputAddress').type('123 Main St');
    cy.get('#category').select('2');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/profile.jpg');

    cy.get('button.btn-primary').click();

    cy.url().should('not.include', '/dashboard/employee');
    cy.get('form').should('exist');
    cy.wait(1000) 
  });

  it('shows error when password is less than 6 characters', () => {
    cy.get('#inputName').type('Edmond');
    cy.get('#inputEmail4').type('test.employee@example.com');
    cy.get('#inputPassword4').type('1234'); // invalid password
    cy.get('#inputSalary').type('5000');
    cy.get('#inputAddress').type('123 Main St');
    cy.get('#category').select('2');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/profile.jpg');

    cy.get('button.btn-primary').click();

    cy.url().should('not.include', '/dashboard/employee');
    cy.get('form').should('exist');
    cy.wait(1000) 
  });

  it('Salary should be a number', () => {
    cy.get('#inputName').type('Edmond');
    cy.get('#inputEmail4').type('test.employee@example.com');
    cy.get('#inputPassword4').type('123456'); 
    cy.get('#inputSalary').type('String');
    cy.get('#inputAddress').type('123 Main St');
    cy.get('#category').select('2');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/profile.jpg');

    cy.get('button.btn-primary').click();

    cy.url().should('not.include', '/dashboard/employee');
    cy.get('form').should('exist');
    cy.wait(1000) 
  });
  it('Email should contain @ error', () => {
    cy.get('#inputName').type('Edmond');
    cy.get('#inputEmail4').type('test.employeeexample.com');
    cy.get('#inputPassword4').type('123456'); 
    cy.get('#inputSalary').type('1234');
    cy.get('#inputAddress').type('123 Main St');
    cy.get('#category').select('2');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/profile.jpg');

    cy.get('button.btn-primary').click();

    cy.url().should('not.include', '/dashboard/employee');
    cy.get('form').should('exist');
    cy.wait(1000) 
  });
  it('Pasword longer than 16 char', () => {
    cy.get('#inputName').type('Edmond');
    cy.get('#inputEmail4').type('edmond@gmail.com');
    cy.get('#inputPassword4').type('123456789123456789'); // invalid password
    cy.get('#inputSalary').type('1234');
    cy.get('#inputAddress').type('123 Main St');
    cy.get('#category').select('3');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/profile.jpg');

    cy.get('button.btn-primary').click();

    cy.url().should('not.include', '/dashboard/employee');
    cy.get('form').should('exist');
    cy.wait(1000) 
  });
  it('Every input field is blank', () => {

    cy.get('button.btn-primary').click();

    cy.url().should('not.include', '/dashboard/employee');
    cy.get('form').should('exist');
    cy.wait(1000) 
    
  });
  it('Add new employee with valid Credintials', () => {
    cy.get('#inputName').type('Edmond');
    cy.get('#inputEmail4').type('edmond@gmail.com');
    cy.get('#inputPassword4').type('12345678'); 
    cy.get('#inputSalary').type('1234');
    cy.get('#inputAddress').type('123 Main St');
    cy.get('#category').select('3');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/profile.jpg');
    
    cy.get('button.btn-primary').click();

    cy.url({ timeout: 10000 }).should('include', '/dashboard/employee');
    cy.wait(1000) 
  });
  
});
