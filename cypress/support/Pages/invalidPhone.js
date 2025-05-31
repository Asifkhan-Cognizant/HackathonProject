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
      preload() {
          cy.reload();
         }
      checkMobileNumber(ph){
          cy.get('#mobile-form-control', { timeout: 30000 }).then((input)=>{
              const actual=input.val();
              expect(actual).to.not.equal(ph);
          })
      }
    }
    
    export default new invalidPhone();