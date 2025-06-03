class HealthInsurance{
    visit(){
        cy.visit('https://health.policybazaar.com/');
        
    }

    newSearch(){
      
    }

    toggleSelf(){  
          
    }

    formSubmit(){
        
    }

    age(){
      cy.get('select#Self').select(21);
      cy.get('#step2ContinueBtn').click();
    }

    selectCity(){
      cy.get('#city').type('Chennai');
    }
    
    medicalHistory(){
      cy.get('#ped_last').check();
      cy.get('#ped_last').should('be.checked');
    }

    menuItems(){
      cy.get('.innerQuickFilters').each(($el, index) => {
        cy.log(`Filter ${index + 1}:`, $el.text());
      });
    }
}

export default new HealthInsurance();