describe("Visit Monitoring Dashboard", () => {
    var username = "";
    var password = "";
    var admit_data = "";
    before(function () {
        //access fixture data
        cy.fixture('user').then(function (regdata) {
            username = regdata.username;
            password = regdata.password
        })
        cy.fixture('admit').then(function (regdata) {
            admit_data = regdata;
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

            cy.get('a').contains('Monitoring Dashboard').click()

            cy.wait(2000);
            //getting patientid from span -div-div-div-div-matcard(to click card and see zoom view)
            cy.get('span').contains('PAT413376848').parent().parent().parent().parent().click({ force: true });
            //click alerts button
            cy.wait(2000)
            //click the alert button
            cy.get('span').contains('notifications_none').parent().parent().click({ force: true });
            cy.wait(2000);
            //button configure parameter
            cy.get('span').contains(' Configure Parameters ').parent().click();
            cy.wait(3000);
            //button configure technical
            cy.get('span').contains(' Configure Technical ').parent().click();
            cy.wait(3000);
            //button configure destinations
            cy.get('span').contains(' Configure Destinations ').parent().click();
            cy.wait(3000);
            cy.get('span').contains(' Configure Others ').parent().click();
            cy.wait(1000);
            cy.get('mat-icon').contains('close').click(({force:true}));


            //get span content and parent element
            //cy.get('span').contains(' Add to Dashboard ').parent().click()
            // var pid = "1456";
            // //getting patient id from span-div-tr-td-checkbox 
            // if(admit_data){
            //     if(admit_data.patients.length > 0){
            //         for (let index = 0; index < admit_data.patients.length; index++) {
            //             const element = admit_data.patients[index];
            //             cy.get("span").contains(element).parent().parent().parent().find("mat-checkbox").click();
            //             cy.wait(1000);
            //         }
            //     }
            // }
            // cy.wait(1000);
            // cy.get("span").contains(" Add to Dashboard ").parent().click();
            // cy.wait(1000);

            //cy.get('.d-lg-flex d-md-none d-sm-none d-none my-2 > button').click()


        });


    });
});
