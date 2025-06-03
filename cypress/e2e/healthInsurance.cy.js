import HealthInsurance from "../support/Pages/HealthInsurance";
 
describe('Hackathon Project', () => {
 
  const child=['son','daughter']
    beforeEach(()=>{
      cy.viewport(1920, 1080);
      Cypress.on('uncaught:exception', (err) => {
        return false;
      });
    });
 
    it('To Verify successful navigation to Health Insurance page.', ()=>{
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

    it('Select all and check for errors',()=>{
      const memberTypes = [
        'male',
        'female',
        'son',
        'daughter',
        'father',
        'mother',
        'grandFather',
        'grandMother',
        'fatherLaw',
        'motherLaw'
      ];

      memberTypes.forEach(types=>{
        HealthInsurance.selectMemberType(types);
      }) 

      HealthInsurance.unCheckAll();
     
    })

    it('child selection and error validation',()=>{
      HealthInsurance.verifyChildSelection(child[0])
      HealthInsurance.verifyChildSelection(child[1])
    })

    it('select Parents and children',()=>{
      HealthInsurance.selectPersonCorrectly();
    })

    it('Form Submission and Navigation to next Page',()=>{
      HealthInsurance.submitForm()
      let ageValue=28;
      let kidsage=10;

      HealthInsurance.selectAge((ageValue-1),(ageValue),kidsage,kidsage)
      HealthInsurance.submitForm()
      HealthInsurance.verifyAgeGapErrors((ageValue-1),(ageValue));
   
      HealthInsurance.selectAge((ageValue),(ageValue-1),kidsage,kidsage)
      HealthInsurance.submitForm()
      HealthInsurance.verifyAgeGapErrors((ageValue),(ageValue-1));
 
    })
});