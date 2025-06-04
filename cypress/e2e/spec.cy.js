
import travelForm from "../support/Pages/TravelInsurance";
import HealthInsurance from "../support/Pages/HealthInsurance";
import CarDetails from "../support/Pages/carDetails";
import invalidPhone from "../support/Pages/InvalidPhoneNumber";
 
describe("Hackathon Project", () => {
  let googleVisit, googleSearch, travelVisit;
  const TravelForm = new travelForm();
  const child=['son','daughter']
  let ageData;
  let example;

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
      cy.fixture('example').then((data) => {
        example = data;
      });
    })


  it("To Verify seamless navigation to Travel Insurance page.", () => {
     TravelForm.initialPage();
     });
    
 
  it("To Verify accurate selection of a European country and dummy travel dates.[regression]", () => {
    cy.visit('https://travel.policybazaar.com/')
    TravelForm.CountryAndDateSelection(travelVisit);
  });
 
  it('To Verify error message for selecting past travel start dates.[regression]',()=>{   
    cy.visit('https://travel.policybazaar.com/') 
    TravelForm.checkInvalidDate()
  })
 
  it('To Verify error message for selecting travel end date before start date.[regression]',()=>{  
    cy.visit('https://travel.policybazaar.com/')  
    TravelForm.checkEndDateselection()
  })
 
  it("To Verify successful selection of 2 travelers (Ages 22, 21).[smoke]", () => {
    cy.visit('https://travel.policybazaar.com/')
    TravelForm.Passenger(travelVisit);
  });
 
  it("To Verify display of enquiry contact information.[sanity]", () => {
    cy.visit('https://travel.policybazaar.com/')
    TravelForm.CallDetails();
  });
 
  it("To Verify behavior when no destination is selected but user attempts to proceed.[smoke]", () => {
    cy.visit('https://travel.policybazaar.com/')
    TravelForm.Date();
    TravelForm.Passenger();
    TravelForm.CallDetails();
    TravelForm.Result();
    TravelForm.CountryErrorCheck();
  });
 
  it("To verify behaviour when no traveller information is selected but user attempts to proceed.[smoke]", () => {
    cy.visit('https://travel.policybazaar.com/')
    TravelForm.Date();
    TravelForm.Country();
    TravelForm.CallDetails();
    TravelForm.Result();
    TravelForm.TravellerErrorCheck();
  });
///Car Insurance


it('Navigation to Car Insurance page and ability to proceed without car number[smoke]', () => {

    CarDetails.visit();
 
    CarDetails.clickPrimaryBtn();
    CarDetails.verifyCarNumberError(example.carDetails.invalidCarNumber);
    CarDetails.clickCarRegDetailsButton();
  });

 
  it("To Verify accurate entry and acceptance of basic car details for new car.[smoke]",()=>{
    CarDetails.visit();
 
    CarDetails.clickPrimaryBtn();
    CarDetails.verifyCarNumberError(example.carDetails.invalidCarNumber);
    CarDetails.clickCarRegDetailsButton();

    CarDetails.clickTruncateFirst();
    CarDetails.clickKia();
 
    CarDetails.clickGridListItem(5);
    CarDetails.clickGridListItem(1);
    CarDetails.waitForLoading();
 
    CarDetails.clickGridListItem(1);
    CarDetails.clickFourthGridItem();
 
  })

  it("To Verify error message for phone number entry with less than 10 digits [smoke]",()=>{
    invalidPhone.carVisit();
    cy.wait(20000);
    invalidPhone.typeName(example.invalidPhone.name);
    invalidPhone.typeMobile(example.invalidPhone.mobile.shortNumeric);

    invalidPhone.clickSubmit();
    invalidPhone.verifyMobileError(example.contactDetails.invalidMobileNumber);
 
   
  })

  it("To Verify error message for phone number entry with more than 10 digits [regression]",()=>{
    invalidPhone.carVisit();
    //invalidPhone.preload();
    cy.wait(20000);
    invalidPhone.typeName(example.invalidPhone.name);
    var ph=example.invalidPhone.mobile.longNumeric

  
    invalidPhone.typeMobile(ph);
    invalidPhone.checkMobileNumber(ph);
 
  })

  it("To Verify error message on entering non-numeric characters in phone number field [regression]",()=>{
    invalidPhone.carVisit();
    //invalidPhone.preload();
    cy.wait(20000);
    invalidPhone.typeName(example.invalidPhone.name);
    invalidPhone.typeMobile(example.invalidPhone.mobile.alphabetic);


    invalidPhone.clickSubmit();
    invalidPhone.verifyMobileError(example.contactDetails.invalidMobileNumber);
  })



  ////HEALTH INSURANCE
  it('To Verify successful navigation to Health Insurance page.', { tags: ['smoke'] },  ()=>{
  
        HealthInsurance.visit();      
        HealthInsurance.unCheckAll();
      });
  
   
      it('To Verify toggling "Self" for "Husband" option.', { tags: ['sanity'] },  ()=>{
        HealthInsurance.visit();
  
        HealthInsurance.selfHusband();
        HealthInsurance.unCheckAll();
      });
  
   
      it('To Verify toggling "Self" for "Wife" option.', { tags: ['sanity'] }, ()=>{
        HealthInsurance.visit();
  
        HealthInsurance.selfWife();
        HealthInsurance.unCheckAll();
      });
  
      it('To Verify toggling between "Male" and "Female" visibility.', { tags: ['sanity'] }, ()=>{
        HealthInsurance.visit();
        HealthInsurance.toggleSelf();
        HealthInsurance.unCheckAll();
      });
   
  
  
      it('Select all and check for errors.', { tags: ['regression'] }, ()=>
  
      {
        HealthInsurance.visit();
        HealthInsurance.selectAllMemberTypes();
        HealthInsurance.unCheckAll();
       
      })
  
  
      it('Child selection and error validation.', { tags: ['regression'] }, ()=>{
        HealthInsurance.visit();
        HealthInsurance.unCheckAll();
        HealthInsurance.verifyChildSelection(child[0])
        HealthInsurance.verifyChildSelection(child[1])
      })
  
  
      it('Select Parents and children.', { tags: ['retest'] },()=>{
        HealthInsurance.visit();
        HealthInsurance.unCheckAll();
        cy.wait(1000);
        HealthInsurance.selectPersonCorrectly();
        HealthInsurance.submitForm();
      })
  
  
      it('Form Submission with Invalid Inputs.', { tags: ['retest'] },()=>{
        HealthInsurance.visit();
        HealthInsurance.unCheckAll();
        cy.wait(1000);
        HealthInsurance.selectPersonCorrectly();
        cy.wait(1000);
        HealthInsurance.submitForm()
  
        HealthInsurance.selectAge((ageData.ageValue-1),(ageData.ageValue),ageData.kidsage,ageData.kidsage)
        HealthInsurance.submitForm()
        HealthInsurance.verifyAgeGapErrors((ageData.ageValue-1),(ageData.ageValue));
     
        HealthInsurance.selectAge((ageData.ageValue),(ageData.ageValue-1),ageData.kidsage,ageData.kidsage)
        HealthInsurance.submitForm()
        HealthInsurance.verifyAgeGapErrors((ageData.ageValue),(ageData.ageValue-1));
  
      })
  
      it('Form Submission with correct values of age.', { tags: ['sanity', 'smoke'] },()=>{
        HealthInsurance.visit();
        HealthInsurance.unCheckAll();
        HealthInsurance.selectPersonCorrectly();
        HealthInsurance.submitForm()
        HealthInsurance.selectAge((ageData.ageValue),(ageData.ageValue),ageData.kidsage,ageData.kidsage)
        HealthInsurance.submitForm()
      })
});
 
 
 