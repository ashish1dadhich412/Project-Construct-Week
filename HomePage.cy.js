class Homepage {
    visit() {
        cy.visit("https://luni-interface-029.vercel.app/");
    }

    homepage() {
        cy.get('[class="nav-link"]').contains('Shop').click();
        cy.xpath('(//button[@type="button"])[2]', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .click();
        cy.go('back');
    }
    
}

export default Homepage;
