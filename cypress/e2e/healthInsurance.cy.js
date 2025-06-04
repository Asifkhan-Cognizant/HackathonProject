import HealthInsurance from "../support/Pages/HealthInsurance";
 
describe('Hackathon Project', () => {
 
  const child=['son','daughter']
    beforeEach(()=>{
      cy.viewport(1920, 1080);
      Cypress.on('uncaught:exception', (err) => {
        return false;
      });
    });
    
    it('To Verify successful navigation to Health Insurance page.' ,  ()=>{
      HealthInsurance.visit();      
      HealthInsurance.newSearch();
      HealthInsurance.unCheckAll();
    });

    it('To Verify toggling "Self" for "Husband" option.', ()=>{
      HealthInsurance.visit();
      HealthInsurance.selfHusband();
      HealthInsurance.unCheckAll();
    });

    it('To Verify toggling "Self" for "Wife" option.', ()=>{
      HealthInsurance.visit();
      HealthInsurance.selfWife();
      HealthInsurance.unCheckAll();
    });

    it('To Verify whether we can able to toggle between "Male" and "Female",ensure that the respective elements are visible', ()=>{
      HealthInsurance.visit();
      HealthInsurance.toggleSelf();
      HealthInsurance.unCheckAll();
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
      HealthInsurance.selectAge((ageValue),(ageValue),kidsage,kidsage)
      HealthInsurance.submitForm()
    })
});