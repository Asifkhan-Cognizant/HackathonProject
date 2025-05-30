class HomePage {
    visit() {
        cy.visit('/');
    }

    search(query) {
        cy.get('textarea.gLFyf').type(query);
        cy.get('.sbct.PZPZlf').get('[data-view-type="1"]').eq(0).click();
    }

    clickPolicyBazaar() {
        cy.get('[data-dtld="policybazaar.com"]').eq(0).click();
    }
}

export default new HomePage();
