import HealthInsurance from "../support/pages/HealthInsurance";

describe('Hackathon Project', () => {

    beforeEach(()=>{
      cy.viewport(1920, 1080);
      Cypress.on('uncaught:exception', (err) => {
        return false;
      });
    });

    it('To Verify successful navigation to Health Insurance page.', ()=>{
      HealthInsurance.visit();
    });

    it('To verify self toggle for each Husband and Wife.', ()=>{
      cy.contains('body', 'You last searched health insurance for').then(($el) => {
        if ($el.length > 0) {
            HealthInsurance.newSearch();
        }
      });
      HealthInsurance.toggleSelf();
      HealthInsurance.formSubmit();
      HealthInsurance.age();
      HealthInsurance.selectCity();
    });
});