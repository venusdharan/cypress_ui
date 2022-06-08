
/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('login', () => {
  var username=" ";
  var password=" ";
  
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
  })

  before(function(){
    //access fixture data
    cy.fixture('user').then(function(regdata){
       username = regdata.username;
       password = regdata.password
    })
  })


it('Login using username and password', () => {
  cy.visit("")
    
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#kc-login').click();
    cy.wait(2000);
    cy.get('.user-icon >a').click();
    cy.wait(2000);
    cy.get('.col-sm-6 > button').click();
    cy.wait(2000);
  })

  
})


