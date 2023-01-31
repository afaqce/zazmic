/// <reference types="cypress" />

describe("Check upload file via plugin", () => {
  beforeEach(() => {
    cy.visit("https://platform-stage.clouds.health/auth/login");
  });

  it("should upload file", () => {
    cy.get('[data-cy="email"]').type("galyna.alieksandrova+5@zazmic.com");
    cy.get('[data-cy="password"]').type("TestAcc123!");
    cy.get('[type="submit"]').contains("Log In ").click();
    cy.get("a").contains("Messages").click();

    cy.get('[type="button"]').contains("Upload file").click();
    cy.get('[data-cy="app-dropdown"]').click();
    cy.get('[title="stg-idg-nocsr"] > .select-option-label').click();

    cy.fixture(
      "uploadFileData/1.2.276.0.50.192168001092.11517584.14547392.3.dcm"
    ).then((fileContent) => {
      cy.get('[data-testid="file-input"]').attachFile({
        fileContent,
        fileName: "1.2.276.0.50.192168001092.11517584.14547392.3.dcm",
      });
    });

    cy.get('[class="file-name"').should(
      "have.text",
      "1.2.276.0.50.192168001092.11517584.14547392.3.dcm"
    );

    cy.get('[type="button"]').contains("Upload file ").click();
    cy.get('[class="progress-line progress-line--success"]').should(
      "be.visible"
    );

    cy.get('[type="button"]').contains("Close ").click();
  });

  it("should upload file second method", () => {
    cy.get('[data-cy="email"]').type("galyna.alieksandrova+5@zazmic.com");
    cy.get('[data-cy="password"]').type("TestAcc123!");
    cy.get('[type="submit"]').contains("Log In ").click();
    cy.get("a").contains("Messages").click();

    cy.get('[type="button"]').contains("Upload file").click();
    cy.get('[data-cy="app-dropdown"]').click();
    cy.get('[title="stg-idg-nocsr"] > .select-option-label').click();

    const filPath =
      "uploadFileData/1.2.276.0.50.192168001092.11517584.14547392.3.dcm";
    cy.get('[data-testid="file-input"]').attachFile(filPath);

    cy.get('[class="file-name"').should(
      "have.text",
      "1.2.276.0.50.192168001092.11517584.14547392.3.dcm"
    );

    cy.get('[type="button"]').contains("Upload file ").click();
    cy.get('[class="progress-line progress-line--success"]').should(
      "be.visible"
    );

    cy.get('[type="button"]').contains("Close ").click();
  });
});
