import travelForm from "../support/Pages/travelForm";

describe("Hackathon Project", () => {
  let googleVisit,googleSearch,travelVisit;
  const TravelForm = new travelForm();

  before(() => {
    
    cy.fixture("travelForm").then((data) => {
      googleVisit=data.googleVisit
      googleSearch = data.googleSearch;
      travelVisit=data.travelVisit
      
    }).then(()=>{
      Cypress.on("uncaught:exception", () => {
        return false;
      });
      TravelForm.home(googleVisit, googleSearch,travelVisit);
      TravelForm.TravelVisit(travelVisit);
    })
   
    
  });

  beforeEach(() => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
  });

  // it("To Verify seamless navigation to Travel Insurance page.", () => {
  //    // cy.visit('https://www.policybazaar.com/?utm_source=google_brand&utm_medium=ppc&utm_term=Policy%20bazaar&utm_campaign=Brand_Policy_Bazaar_Exact00Brand-policy_bazaar&gad_source=1&gad_campaignid=2055878099&gbraid=0AAAAADwVZjK6vYTCZSwNsmpT9ulrjeQIg&gclid=EAIaIQobChMIuIP5wu7RjQMVY9QWBR3loRy3EAAYASAAEgKbAvD_BwE')

  //   TravelForm.home(googleVisit, googleSearch,travelVisit);
  //   TravelForm.TravelVisit(travelVisit);
  // });
 
  it("To Verify accurate selection of a European country and dummy travel dates.",()=>{
    //cy.visit('https://travel.policybazaar.com/?newpq=1&utm_term=newjourney&utm_source=google_brand&utm_medium=ppc&utm_campaign=Brand_PolicyBazaar_Exact00PolicyBazaar&gad_source=1&gad_campaignid=2056207150&gbraid=0AAAAADwVZjJIK45Rl-dKuYm4KTAS2Ys_k&gclid=EAIaIQobChMI1c6p16HKjQMVY6VmAh2bSQiKEAAYASAAEgLWMPD_BwE&utm_content=newpq');
   
      TravelForm.CountryAndDateSelection(travelVisit)
    
    

  })

  it("To Verify successful selection of 2 travelers (Ages 22, 21).",()=>{
    //cy.visit('https://travel.policybazaar.com/?newpq=1&utm_term=newjourney&utm_source=google_brand&utm_medium=ppc&utm_campaign=Brand_PolicyBazaar_Exact00PolicyBazaar&gad_source=1&gad_campaignid=2056207150&gbraid=0AAAAADwVZjJIK45Rl-dKuYm4KTAS2Ys_k&gclid=EAIaIQobChMI1c6p16HKjQMVY6VmAh2bSQiKEAAYASAAEgLWMPD_BwE&utm_content=newpq');
   
    TravelForm.Passenger(travelVisit);

  })
  

  it("To Verify display of enquiry contact information",()=>{
    //cy.visit('https://travel.policybazaar.com/?newpq=1&utm_term=newjourney&utm_source=google_brand&utm_medium=ppc&utm_campaign=Brand_PolicyBazaar_Exact00PolicyBazaar&gad_source=1&gad_campaignid=2056207150&gbraid=0AAAAADwVZjJIK45Rl-dKuYm4KTAS2Ys_k&gclid=EAIaIQobChMI1c6p16HKjQMVY6VmAh2bSQiKEAAYASAAEgLWMPD_BwE&utm_content=newpq');
    TravelForm.CallDetails();


  })
  // it("Next Page",()=>{
  //   //cy.visit('https://travel.policybazaar.com/?newpq=1&utm_term=newjourney&utm_source=google_brand&utm_medium=ppc&utm_campaign=Brand_PolicyBazaar_Exact00PolicyBazaar&gad_source=1&gad_campaignid=2056207150&gbraid=0AAAAADwVZjJIK45Rl-dKuYm4KTAS2Ys_k&gclid=EAIaIQobChMI1c6p16HKjQMVY6VmAh2bSQiKEAAYASAAEgLWMPD_BwE&utm_content=newpq');
   
  //   TravelForm.Result();

  // })

  it("To Verify behavior when no destination is selected but user attempts to proceed.",()=>{
   // cy.visit('https://travel.policybazaar.com/?newpq=1&utm_term=newjourney&utm_source=google_brand&utm_medium=ppc&utm_campaign=Brand_PolicyBazaar_Exact00PolicyBazaar&gad_source=1&gad_campaignid=2056207150&gbraid=0AAAAADwVZjJIK45Rl-dKuYm4KTAS2Ys_k&gclid=EAIaIQobChMI1c6p16HKjQMVY6VmAh2bSQiKEAAYASAAEgLWMPD_BwE&utm_content=newpq')
   
    TravelForm.Date();
    TravelForm.Passenger();
    TravelForm.CallDetails();
    TravelForm.Result();
    TravelForm.CountryErrorCheck();

  })

  it("To verify behaviour when no traveller information is selected but user attempts to proceed",()=>{
   // cy.visit('https://travel.policybazaar.com/?newpq=1&utm_term=newjourney&utm_source=google_brand&utm_medium=ppc&utm_campaign=Brand_PolicyBazaar_Exact00PolicyBazaar&gad_source=1&gad_campaignid=2056207150&gbraid=0AAAAADwVZjJIK45Rl-dKuYm4KTAS2Ys_k&gclid=EAIaIQobChMI1c6p16HKjQMVY6VmAh2bSQiKEAAYASAAEgLWMPD_BwE&utm_content=newpq')
  
    TravelForm.Date();
    TravelForm.Country()
    TravelForm.CallDetails();
    TravelForm.Result();
    TravelForm.TravellerErrorCheck();


  })


});
