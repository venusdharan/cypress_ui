
describe("Visit active Patients", () => {
    var username = "";
    var password = "";
    var discharge_data = "";
    before(function () {
        //access fixture data
        cy.fixture('user').then(function (regdata) {
            username = regdata.username;
            password = regdata.password
        })
        cy.fixture('discharge').then(function (regdata) {
          discharge_data = regdata;
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
            var pid = "1456";
            //getting patient id from span-div-tr-td-checkbox 
            if (discharge_data) {
                if (discharge_data.patients.length > 0) {
                    for (let index = 0; index < discharge_data.patients.length; index++) {
                        const element = discharge_data.patients[index];
                        console.log(element)
                        var el = cy.get("span").contains(element);


                        if (el) {
                            el.parent().parent().parent().get('span').contains(' Discharge ').parent().click({ force: true });
                        } else {
                            console.log("Patient not found !")
                        }


                        cy.wait(1000);
                    }
                }
            }
            cy.wait(1000);
           
            //cy.get('span')

            
        });


    });
});

