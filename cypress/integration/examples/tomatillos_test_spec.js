beforeEach(() => {
    cy.visit('http://localhost:3000');
});

describe('Homepage', () => {
    it('Should be able to visit the page and render the correct elements', () => {
        cy.contains('Rotten Tomatillos')
        cy.get('section[class=movie-container]')
    });
});

describe('SelectedMovie', () => {

    beforeEach(() => {
        cy.get('div[class=posters]').find('a').first().click()
    })

    it('Should allow user to click on a poster', () => {
        cy.get('section[class=movie-container]').get('article[class=selected-movie]')
        .url().should('eq', 'http://localhost:3000/694919')
    });

    it('Should not see new Movies after clicking on an individual poster', () => {
        cy.get('section[class=movie-container]').should('not.contain', 'New Movies')
    });

    it('Should allow user to go back to home page', () => {
        cy.get('svg[class=go-back]').click()
        .url().should('eq', 'http://localhost:3000/')
        .get('section[class=movie-container]').should('contain', 'New Movies')
    });



});