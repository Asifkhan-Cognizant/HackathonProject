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
      HealthInsurance.visit();  
      HealthInsurance.selfHusband();
    });

    it('To Verify toggling "Self" for "Wife" option.', ()=>{
      HealthInsurance.visit();  
      HealthInsurance.selfWife();
    });

    it('To Verify whether we can able to toggle between "Male" and "Female",ensure that the respective elements are visible', ()=>{
      HealthInsurance.visit();  
      HealthInsurance.toggleSelf();
    });

    it('Select all and check for errors',()=>
    {
      HealthInsurance.visit();
      HealthInsurance.selectAllMemberTypes();
      HealthInsurance.unCheckAll();
     
    })

    it('child selection and error validation',()=>{
      HealthInsurance.visit();
      HealthInsurance.verifyChildSelection(child[0])
      HealthInsurance.verifyChildSelection(child[1])
    })

    it('select Parents and children',()=>{
      HealthInsurance.visit();
      HealthInsurance.selectPersonCorrectly();
    })

    it('Form Submission with Invalid Inputs',()=>{
      HealthInsurance.visit();
      HealthInsurance.selectPersonCorrectly();

      HealthInsurance.submitForm()
      HealthInsurance.selectAge((ageData.ageValue-1),(ageData.ageValue),ageData.kidsage,ageData.kidsage)
      HealthInsurance.submitForm()
      HealthInsurance.verifyAgeGapErrors((ageData.ageValue-1),(ageData.ageValue));
   
      HealthInsurance.selectAge((ageData.ageValue),(ageData.ageValue-1),ageData.kidsage,ageData.kidsage)
      HealthInsurance.submitForm()
      HealthInsurance.verifyAgeGapErrors((ageData.ageValue),(ageData.ageValue-1));

    })

    it('Form Submission with correct values of age ',()=>{
      HealthInsurance.visit();
      HealthInsurance.selectPersonCorrectly();
      
      HealthInsurance.selectAge((ageData.ageValue),(ageData.ageValue),ageData.kidsage,ageData.kidsage)
      HealthInsurance.submitForm()
    })
});