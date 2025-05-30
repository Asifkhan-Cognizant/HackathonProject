class invalidPhone{
    typeName(name) {
        cy.get('#name-form-control', { timeout: 30000 })
              .should('be.visible')
              .type(name);
          }    
    typeMobile(mobile) {
        cy.get('#mobile-form-control', { timeout: 30000 })
          .should('be.visible')
          .type(mobile);
      }
     
      clickSubmit() {
        cy.get('.submitBtn')
          .click();
      }
     
      verifyMobileError() {
        cy.get('.errorMsg')
          .should("have.text", "Enter a valid mobile number");
      }
    }
    
    export default new invalidPhone();