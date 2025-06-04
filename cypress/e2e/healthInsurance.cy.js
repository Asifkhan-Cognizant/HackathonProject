import HealthInsurance from "../support/Pages/HealthInsurance";
 
describe('Hackathon Project', () => {
 
  const child=['son','daughter']
  let ageData;
    beforeEach(()=>{
      cy.viewport(1920, 1080);
      Cypress.on('uncaught:exception', (err) => {
        return false;
      });
    });
 
    before(()=>{
      cy.fixture("healthInsurance").then((data) => {
        ageData = data.ageData;
      });
    })


    it('To Verify successful navigation to Health Insurance page.' ,  ()=>{
      HealthInsurance.visit();      
    });

    it('To Verify toggling "Self" for "Husband" option.', ()=>{
      cy.get('body').then(($body) => {
        if ($body.find('*:contains("You last searched health insurance for")').length > 0) {
          HealthInsurance.newSearch();
          cy.wait(5000);
          HealthInsurance.maleSelf();
        } else {
          HealthInsurance.maleSelf();
        }
      });    
    });

    it('To Verify toggling "Self" for "Wife" option.', ()=>{
      cy.get('body').then(($body) => {
        if ($body.find('*:contains("You last searched health insurance for")').length > 0) {
          HealthInsurance.newSearch();
          cy.wait(5000);
          HealthInsurance.femaleSelf();
        } else {
          HealthInsurance.femaleSelf();
        }
      });    
    });

    it('To Verify whether we can able to toggle between "Male" and "Female",ensure that the respective elements are visible', ()=>{
      HealthInsurance.toggleSelf();
    });

    it('Select all and check for errors',()=>
    {
      HealthInsurance.selectAllMemberTypes();
      HealthInsurance.unCheckAll();
     
    })

    it('child selection and error validation',()=>{
      HealthInsurance.verifyChildSelection(child[0])
      HealthInsurance.verifyChildSelection(child[1])
    })

    it('select Parents and children',()=>{
      HealthInsurance.selectPersonCorrectly();
    })

    it('Form Submission with Invalid Inputs',()=>{

      HealthInsurance.submitForm()
      HealthInsurance.selectAge((ageData.ageValue-1),(ageData.ageValue),ageData.kidsage,ageData.kidsage)
      HealthInsurance.submitForm()
      HealthInsurance.verifyAgeGapErrors((ageData.ageValue-1),(ageData.ageValue));
   
      HealthInsurance.selectAge((ageData.ageValue),(ageData.ageValue-1),ageData.kidsage,ageData.kidsage)
      HealthInsurance.submitForm()
      HealthInsurance.verifyAgeGapErrors((ageData.ageValue),(ageData.ageValue-1));

    })

    it('Form Submission with correct values of age ',()=>{
      HealthInsurance.selectAge((ageData.ageValue),(ageData.ageValue),ageData.kidsage,ageData.kidsage)
      HealthInsurance.submitForm()
    })
});