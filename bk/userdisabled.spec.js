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

const { faker } = require('@faker-js/faker');

describe('login', () => {
    var username = " ";
    var password = " ";
    var userdata = "";
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test

    })

    before(function () {
        //access fixture data
        cy.fixture('user').then(function (regdata) {
            username = regdata.username;
            password = regdata.password;

        })

        cy.fixture('adduser').then(function (regdata) {
            userdata = regdata;


        })
    })



    it('Login using username and password', () => {
        cy.visit("")

        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#kc-login').click();
        cy.wait(2000);
        cy.get('span').contains('Settings').click();
        cy.wait(2000);
        //manage users
        cy.get('[image="manageuser.png"]').find('a').click();
        cy.wait(2000);
        //add user button click
        // cy.get('mat-icon').contains('add').parent().parent().click();
        cy.wait(2000);

        // cy.get('#firstname').type(userdata.first_name || faker.name.firstName());
        // cy.get('#lastname').type(userdata.last_name || faker.name.lastName())
        // cy.get('#email').type(userdata.email_id || faker.internet.email().toLowerCase());
        // cy.get('input[placeholder="081234 56789"]').type(userdata.phone || faker.phone.phoneNumber());
        // cy.get('span').contains(userdata.role).parent().parent().parent().click()
        // cy.get('span').contains(' + Group ').parent().click();
        // cy.wait(1000);
        // cy.get('mat-select[placeholder*="Clinical condition"]').click();
        // cy.wait(1000);
        // cy.get('span').contains(userdata.group).parent().click();
        // cy.wait(1000);
        // cy.get('span').contains(' Add ').parent().click();
        // cy.wait(1000);
        // cy.get('span').contains(' Save ').parent().click();



        // cy.get('mat-icon').contains('add').parent().parent().click();
        // cy.wait(2000);

        // cy.get('#firstname').type(userdata.first_name);
        // cy.get('#lastname').type(userdata.last_name);
        // cy.get('#email').type(userdata.email_id);
        // cy.get('input[placeholder="081234 56789"]').type(userdata.phone);
        // cy.get('span').contains(userdata.role).parent().parent().parent().click()
        // cy.get('span').contains(' + Group ').parent().click();
        // cy.wait(1000);
        // cy.get('mat-select[placeholder*="Clinical condition"]').click();
        // cy.wait(1000);
        // cy.get('span').contains(userdata.group).parent().click();
        // cy.wait(1000);
        // cy.get('span').contains(' Add ').parent().click();
        // cy.wait(1000);
        // cy.get('span').contains(' Save ').parent().click();
        // cy.get('mat-error').contains(' USER ALREADY EXISTS WITH THIS EMAIL/PHONE NUMBER!! ').should("be.visible")
        cy.wait(1000);
        cy.get('mat-icon').contains('search').parent().parent().click();
        cy.get('#searchString').type(userdata.search);
        cy.wait(500);
        cy.get('ls-widget').contains(" madalyn_effertz@hotmail.com ").parent().parent().parent().find("mat-slide-toggle").click();
        cy.wait(500);
        cy.get('span').contains(' Confirm ').click();
        cy.wait(1000);
       // cy.get('span').contains('Account is disabled, contact your administrator').should('be.visible');



    })


})


