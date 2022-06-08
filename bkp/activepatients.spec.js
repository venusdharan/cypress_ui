
describe("Visit active Patients", () => {
    var username = "";
    var password = "";
    before(function () {
        //access fixture data
        cy.fixture('user').then(function (regdata) {
            username = regdata.username;
            password = regdata.password
        })
    })
    it("Load UI", () => {
        cy.visit("");
        cy.url().then(function (url) {

            if (url.indexOf("auth") !== -1) {
                cy.get("#username").type(username);
                cy.get("#password").type(password);
                cy.get("#kc-login").click();
            }
            //cy.get("ls-page-header[type=active_patients]").should("be.visible");
            //start logged
            cy.wait(2000);

            cy.get('[image="active-patients.png"]').find('a').click()

            cy.wait(2000);

            
        });


    });
});

