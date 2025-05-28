 
import travelForm from "../support/Pages/travelForm";


describe('Hackathon Project', () => {
  const TravelForm=new travelForm()


  before(()=>{
    cy.visit("https://www.google.com/")
  })


  beforeEach(()=>{
    Cypress.on('uncaught:exception', ()=>{
      return false;
    });    
 
  

    it('Travel Insurance plan for students',()=>{
      TravelForm.home()
    })









  });

 
});