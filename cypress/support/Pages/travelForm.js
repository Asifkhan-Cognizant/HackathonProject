class travelForm{

   
    home(){
     cy.visit("https://www.policybazaar.com")
     cy.get('textarea.gLFyf').type('Policy Bazaar');
     cy.get('.sbct.PZPZlf').get('[data-view-type="1"]').eq(0).click();
     cy.pause();
     cy.get('[data-dtld="policybazaar.com"]').eq(0).click();
//sumanth commit
    }
     



}

export default travelForm