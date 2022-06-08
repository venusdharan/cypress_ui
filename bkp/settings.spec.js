
/// <reference types="cypress" />


describe('login', () => {
    var username=" ";
    var password=" ";
    
    beforeEach(() => {
      
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
      //click settings button
      cy.get('span').contains('Settings').click();
      cy.wait(2000);
      //manage users
      //manage groups
      cy.get('[image="managegroup.png"]').find('a').click();
      cy.wait(2000);
      //manage configuration
      cy.get('[image="manageuser.png"]').find('a').click();
      
     
    })
  
    
  })
  
  