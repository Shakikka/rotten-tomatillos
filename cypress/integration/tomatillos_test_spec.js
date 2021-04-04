describe('Homepage', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    
    it('Should be able to visit the page and render the correct elements', () => {
        cy.contains('Rotten T')
        cy.get('section[class=movie-container]')
    });
    
    it('should show all movies from API on load', () => {
        cy.fixture('movie-data.json').then((movieData) => {
            cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {movies: movieData});
        })
        cy.visit('http://localhost:3000');
    });
    
    it('should show an error message when all movies don\'t load', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',
        { statusCode: 404
        })
        cy.visit('http://localhost:3000')
        cy.get('h2').contains('nothing')
    });
});

describe('SelectedMovie', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        .get('.movie-card').first().click()
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

describe('Paths for single movie and video network requests', () => {
    it('should show an error message when singular movie isn\'t available', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
            {
                statusCode: 404
            })
        cy.visit('http://localhost:3000/694919')
        cy.get('h2').contains('cannot')
    });

    it( 'should show an error message when video trailer isn\'t available', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
            {
                statusCode: 404
            })
        cy.visit('http://localhost:3000/694919')
        cy.get('h2').contains('can\'t')
    });

    it('should show single movie details and trailer for movie page', () => {
        cy.fixture('movie-trailer.json').then((movieTrailer) => {
            cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { videos: movieTrailer });
        })
        cy.fixture('singular-movie.json').then((singleMovie) => {
            cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { movie: singleMovie });
        })
            cy.visit('http://localhost:3000/694919')
    });
    
});


//We tried desperately to test drag and drop, but it is impossible with Cypress and react-beautiful-dnd