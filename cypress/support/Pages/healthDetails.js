class HealthInsurance{
    visit(){
        cy.visit('https://health.policybazaar.com/');
        cy.get('body').should('contain', 'Health Insurance');
    }

    newSearch(){
      cy.wait(5000);
      cy.xpath('//*[@id="__nuxt"]/div/div[1]/div/div/div/form/section/article/div/section/button[1]').click();    
    }

    toggleSelf(){  
          cy.wait(1000); 
          cy.get('input#female').check({force: true}).should('be.checked');
    
          cy.get('input[name="gender"]:checked')
          .invoke('val')
          .then(value => {
            let self;
            if(value == 1){
              self = 'Husband';
            } else {
              self = 'Wife';
            }
            cy.log(`Self is `+self); 
          });
    
          cy.wait(1000); 
          cy.get('input#male').check({force: true}).should('be.checked');
    
          cy.get('input[name="gender"]:checked')
          .invoke('val')
          .then(value => {
            let self;
            if(value == 1){
              self = 'Husband';
            } else {
              self = 'Wife';
            }
            cy.log(`Self is`+self); 
          });
    }

    formSubmit(){
        cy.get('#step1ContinueBtn').click();
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