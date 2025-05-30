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
    invalidPhone.typeMobile("7567");
 
    invalidPhone.clickSubmit();
    invalidPhone.verifyMobileError();
  });
});
 
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});