import CarDetails from '../support/Pages/carDetails';
import invalidPhone from '../support/Pages/invalidPhone';
 
describe('Policy Bazaar Flow', () => {
  it('should complete the flow and verify error messages', () => {
    CarDetails.visit();
 
    CarDetails.clickPrimaryBtn();
    CarDetails.verifyCarNumberError();
    CarDetails.clickCarRegDetailsButton();
 
    CarDetails.clickTruncateFirst();
    CarDetails.clickKia();
 
    CarDetails.clickGridListItem(5);
    CarDetails.clickGridListItem(1);
    CarDetails.waitForLoading();
 
    CarDetails.clickGridListItem(1);
    CarDetails.clickFourthGridItem();
 
    invalidPhone.typeName("sgr");
    invalidPhone.typeMobile(938624);
    invalidPhone.clickSubmit();
    invalidPhone.verifyMobileError();
    
    
    invalidPhone.preload();
    cy.wait(10000);
    invalidPhone.typeName("sgr");
    invalidPhone.typeMobile("adc");
    invalidPhone.clickSubmit();
    invalidPhone.verifyMobileError();

    invalidPhone.preload();
    cy.wait(10000);
    invalidPhone.typeName("sgr");
    var ph=98765432159
    invalidPhone.typeMobile(ph);
    invalidPhone.checkMobileNumber(ph);
  });
});
 
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});