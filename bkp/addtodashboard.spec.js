describe("Visit active Patients", () => {
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

            cy.get('[image="active-patients.png"]').find('a').click()

            cy.wait(2000);
            //get span content and parent element
            //cy.get('span').contains(' Add to Dashboard ').parent().click()
            var pid = "1456";
            //getting patient id from span-div-tr-td-checkbox 
            if (admit_data) {
                if (admit_data.patients.length > 0) {
                    for (let index = 0; index < admit_data.patients.length; index++) {
                        const element = admit_data.patients[index];
                        console.log(element)
                        var el = cy.get("span").contains(element);


                        if (el) {
                            el.parent().parent().parent().find("mat-checkbox").click();
                        } else {
                            console.log("Patient not found !")
                        }


                        cy.wait(1000);
                    }
                }
            }
            cy.wait(1000);

            // cy.get("span").contains(" Add to Dashboard ").parent().then(($button) => {
            //     if (cy.get($button).should('not.be.disabled')) {
            //         //your logical code for button ACTIVE
            //         $button.click()
            //     }
            //     else {
            //         //your logical code for button NOT ACTIVE
            //         cy.log("add to dashboard disabled")
            //     }
            // })

            var add_btn  = cy.get("span").contains(" Add to Dashboard ").parent();
            //if(add_btn.is(':visible'))
            if(add_btn.should('be.disabled')){
                //your logical code for button ACTIVE
                cy.log("add to dashboard disabled")
            }
            else{
                //your logical code for button NOT ACTIVE
            }

            //cy.get("span").contains(" Add to Dashboard ").parent().click();
            cy.wait(1000);

            //cy.get('.d-lg-flex d-md-none d-sm-none d-none my-2 > button').click()


        });


    });
});
