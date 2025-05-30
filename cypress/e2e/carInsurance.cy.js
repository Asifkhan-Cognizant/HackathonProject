import CarDetails from '../support/Pages/carDetails';
import enquiryInfo from '../support/Pages/enquiryInfo';
 
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
 
    enquiryInfo.typeName("sgr");
    enquiryInfo.typeMobile("7567");
 
    enquiryInfo.clickSubmit();
    enquiryInfo.verifyMobileError();
  });
});
 
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});