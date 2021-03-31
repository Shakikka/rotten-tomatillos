beforeEach(() => {
});

describe('Homepage', () => {
    it('Should be able to visit the page and render the correct elements', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Rotten T🍅matillos')
        cy.get('section[class=movie-container]')
    });

    it('should show all movies from API on load', () => {
        cy.fixture('movie-data.json').then((movieData) => {
            cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: movieData});
        })
        cy.visit('http://localhost:3000');
    });
});

// describe('SelectedMovie', () => {

//     beforeEach(() => {
//         cy.get('div[class=posters]').find('a').first().click()
//     })

//     it('Should allow user to click on a poster', () => {
//         cy.get('section[class=movie-container]').get('article[class=selected-movie]')
//         .url().should('eq', 'http://localhost:3000/694919')
//     });

//     it('Should not see new Movies after clicking on an individual poster', () => {
//         cy.get('section[class=movie-container]').should('not.contain', 'New Movies')
//     });

//     it('Should allow user to go back to home page', () => {
//         cy.get('svg[class=go-back]').click()
//         .url().should('eq', 'http://localhost:3000/')
//         .get('section[class=movie-container]').should('contain', 'New Movies')
//     });


//     it('should enlarge a movie with API information', () => {

//     });

//     it('should show trailer after loading singular movie page', () => {

//     });

// });

// describe('Sad Paths for Network Requests', () => {
//     it('should show an error message when all movies don\'t load', () => {

//     });

//     it('should show an error message when singular movie isn\'t available', () => {

//     });

//     it( 'should show an error message when video trailer isn\'t available', () => {

//     });
// });