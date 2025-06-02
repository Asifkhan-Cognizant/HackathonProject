import CarDetails from '../support/Pages/carDetails';
import invalidPhone from '../support/Pages/invalidPhone';
 
describe('Policy Bazaar Flow', () => {
  it('Navigation to Car Insurance page and ability to proceed without car number', () => {
    CarDetails.visit();

    CarDetails.clickPrimaryBtn();
    CarDetails.verifyCarNumberError();
    CarDetails.clickCarRegDetailsButton();
  });

  it("To Verify accurate entry and acceptance of basic car details for new car.",()=>{
    
    CarDetails.clickTruncateFirst();
    CarDetails.clickKia();
 
    CarDetails.clickGridListItem(5);
    CarDetails.clickGridListItem(1);
    CarDetails.waitForLoading();
 
    CarDetails.clickGridListItem(1);
    CarDetails.clickFourthGridItem();

  })

  it("To Verify error message for phone number entry with less than 10 digits",()=>{
   
    invalidPhone.typeName("sgr");
    invalidPhone.typeMobile(938624);
    invalidPhone.clickSubmit();
    invalidPhone.verifyMobileError();
   
  })

  it("To Verify error message for phone number entry with more than 10 digits",()=>{

    invalidPhone.preload();
    cy.wait(10000);
    invalidPhone.typeName("sgr");
    var ph=98765432159
    invalidPhone.typeMobile(ph);
    invalidPhone.checkMobileNumber(ph);

  })

  it("To Verify error message on entering non-numeric characters in phone number field",()=>{

    invalidPhone.preload();
    cy.wait(10000);
    invalidPhone.typeName("sgr");
    invalidPhone.typeMobile("adc");
    invalidPhone.clickSubmit();
    invalidPhone.verifyMobileError();

  })
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});