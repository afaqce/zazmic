/// <reference types="cypress" />

describe("Add user via API call", () => {
  it("should add user", () => {
    cy.request({
      method: "POST",
      url: "https://backend-stage.clouds.health/v1/profile/create", //we can place this in config
      failOnStatusCode: false,
      auth: {
        //we can place this in config
        bearer: //please add a valid token before running the test
          "Bearer eyJ0eXAiOiJBVVRIRU5USUNBVElPTiIsImFsZyI6IkhTNTEyIn0.eyJqdGkiOiJmMzBkN2QwOS00NWIzLTQ2MmQtOWY4Yi00MzgxOWU5ZTdiNzYiLCJzdWIiOiJnYWx5bmEuYWxpZWtzYW5kcm92YSs1QHphem1pYy5jb20iLCJpc3MiOiJjbG91ZGhlYWx0aC1jb250cm9sbGVyLWFwcGxpY2F0aW9uIiwiaWF0IjoxNjc1MTkyNTcyLCJleHAiOjE2NzUxOTk3NzIsInJvbGUiOiJBRE1JTiIsImludGVncmF0aW9uU2V0TmFtZSI6ImNsb3VkaGVhbHRoLXN0ZyJ9.DoHDTVrZ4YPFjrCeuNN-wBH0wNm_2ZFz6i2YLwQDTmgs1TEZLe_NQBxSgj4WCCH287T8jupwAByO83aSqCxXLg",
      },
      body: {
        profileData: {
          firstName: "Customer", //please change the name before run as the duplicate name is not allowed
          lastName: "Four", // it can be handled dynamically 
          user: "customerfour@mailinator.com", //change the email before run
          timeZone: {
            zoneName: "Dateline Standard Time",
            name: "Dateline Standard Time",
            utcOffset: -12,
            dst: "Y",
          },
          role: "USER",
          phone: {
            countryCode: "+1",
            areaCode: "415",
            number: "6464645",
          },
          activityStatus: "INVITED",
          facilityGroup: "cloudhealth-stg",
        },
      },
    }).as("response");
    //Validate status code
    cy.get("@response").its("status").should("eq", 200);
  });
});
