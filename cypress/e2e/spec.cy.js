describe('My First Test', () => {

  beforeEach(() => {
    cy.log("load the web glovoapp.com")
    cy.visit('/');

    cy.get('[data-test-id="landing-container"]')
      .should('be.visible');

    cy.log("Clean cookies command execution");
    cy.clearCookies();
    //cy.getCookies().should('be.empty');

    cy.log("Clear local storage");
    cy.clearLocalStorage();

    cy.log("click the Reject All button");
   
    cy.get('#onetrust-reject-all-handler') 
      .should('be.visible')
      .invoke('text') 
      .then((texto) => {
        if(texto === 'Reject All'){
          cy.log("Reject All clicked");
          cy.get('#onetrust-reject-all-handler').click();
        } else{
          cy.log("Reject All not clicked");
        }; 
      });
  });

  afterEach(() => {
    cy.log("clean the environment");
    cy.log("Clean cookies command execution");
    cy.clearCookies();

    cy.log("Clear local storage");
    cy.clearLocalStorage();
    cy.wait(500);
  });

  
  it('Login1', () => {
    cy.log("click the Login button")
    cy.get('[data-test-id="login-button"]').contains('Login')
      .should('be.visible')
      .click();

    cy.get('[data-test-id="unified-login-signup"]') 
      .should('be.visible')
      .invoke('text') 
      .then(() => {
        cy.get('.close-button').click();
      });
  })

  it('Login2', () => {
    cy.log("click the Login button")
    cy.get('[data-test-id="login-button"]').contains('Login')
      .should('be.visible')
      .click();

    cy.get('[data-test-id="unified-login-signup"]') 
      .should('be.visible')
      .invoke('text') 
      .then(() => {
        cy.get('.close-button').click();
      });
  })

  it('Login3', () => {
    cy.log("click the Login button")
    cy.get('[data-test-id="login-button"]').contains('Login')
      .should('be.visible')
      .click();

    cy.get('[data-test-id="unified-login-signup"]') 
      .should('be.visible')
      .invoke('text') 
      .then(() => {
        cy.get('.close-button').click();
      });
  })

  it('Login4', () => {
    cy.log("click the Login button")
    cy.get('[data-test-id="login-button"]').contains('Login')
      .should('be.visible')
      .click();

    cy.get('[data-test-id="unified-login-signup"]') 
      .should('be.visible')
      .invoke('text') 
      .then(() => {
        cy.get('.close-button').click();
      });
  })


  it('Login5', () => {
    cy.log("click the Login button")
    cy.get('[data-test-id="login-button"]').contains('Login')
      .should('be.visible')
      .click();

    cy.get('[data-test-id="unified-login-signup"]') 
      .should('be.visible')
      .invoke('text') 
      .then(() => {
        cy.get('.close-button').click();
      });
  })

  it('Login6', () => {
    cy.log("click the Login button")
    cy.get('[data-test-id="login-button"]').contains('Login')
      .should('be.visible')
      .click();
     
    cy.get('[data-test-id="unified-login-signup"]') 
      .should('be.visible')
      .invoke('text') 
      .then(() => {
        cy.get('.close-button').click();
      });
  })

  it('Login7', () => {
    cy.log("click the Login button")
    cy.get('[data-test-id="login-button"]').contains('Login')
      .should('be.visible')
      .click();

    cy.get('[data-test-id="unified-login-signup"]') 
      .should('be.visible')
      .invoke('text') 
      .then(() => {
        cy.get('.close-button').click();
      });
  })
})