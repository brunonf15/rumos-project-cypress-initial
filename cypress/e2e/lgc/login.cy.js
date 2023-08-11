// File: login.cy.js

describe("Login Test", () => {

    beforeEach(() => {

        cy.visit("https://www.letsgetchecked.com/account/login"); // Adjust the URL as needed

    });

    it("Should successfully log in", () => {

        // Actions

        cy.get("#onetrust-accept-btn-handler").click();

        cy.get("#userName").type("mafeporu@gmail.com");

        cy.get("#password").type("Pa$$w0rd!");

        cy.get("button[type='submit']").click();

        // Aliases

        cy.get('.d-block', { timeout: 10000 }).as("welcomeMessage");

        // Assertions

        cy.get("@welcomeMessage").should("contain", "Ferdinand");

        cy.url().should("eq", "https://www.letsgetchecked.com/account/"); // Adjust the URL as needed

    });

});
