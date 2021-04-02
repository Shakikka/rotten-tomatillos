        
describe('Homepage', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    
    it('Should be able to visit the page and render the correct elements', () => {
        cy.contains('Rotten T🍅matillos')
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
        .get('.BrainhubCarousel__track').get('a').first().click({ force: true })
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
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos',
            {
                statusCode: 201,
                body: {
                    "videos": [
                        {
                            "id": 330,
                            "movie_id": 694919,
                            "key": "KK8FHdFluOQ",
                            "site": "YouTube",
                            "type": "Trailer"
                        }
                    ]
                }
            })
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
            {
                statusCode: 201,
                body: {
                    "movie": { "id": 694919,
                        "title": "Double Jragon", 
                        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg", 
                        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg", 
                        "release_date": "2020-09-04", 
                        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.", 
                        "genres": ["Action", "Adventure", "Drama", "Fantasy"], 
                        "budget": 200000000, 
                        "revenue": 57000000, 
                        "runtime": 115, 
                        "tagline": "", 
                        "average_rating": 5.1 
                    }
                }
            })
        
            cy.visit('http://localhost:3000/694919')
    });
    
});