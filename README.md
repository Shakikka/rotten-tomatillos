# Rotten Turtle Tales

## [Joel Thomas](https://github.com/Shakikka) and [Jackson McGuire](https://github.com/Jacksonmcguire)

### Learning Goals:
 * fundamentals of React
 * Incorporate Router and url path extensions
 * Implement Cypress for testing of user
#### Wins:
 * Gained confidence with React
 * Understanding of Cypress and Router / How to implement them
 * Satisfied with our finished product
#### Challenges:
* Implementing testing for drag and drop functionality proved harder than expected and we were not able to fully test that logic with Cypress.

## Overview of Site:
##### Rotten Turtle Tales is a web app that allows a user to:
  * Browse New movies in a gallery of movie posters
  * Drag their favorite movies from the New Movies section into the Favorites section
  * Check Ratings and other details of a movie by clicking on a given poster
  * Once a movie poster is selected and the details page appears, a user can watch a randomly selected video related to that movie (trailers, teasers, etc)
  

### Screenshots / Screen Recordings
#### Movie Gallery Homepage:
![](https://media.giphy.com/media/HzLcVvt2ylZgdEFDgc/giphy.gif)
#### Selected Movie:
![](https://media.giphy.com/media/jLsoLEiLhCaj1JUWDF/giphy.gif)
### Technologies Used:
* Javacript
* Webpack
* [React](https://reactjs.org/)
* [React Beautiful dnd](https://github.com/atlassian/react-beautiful-dnd)
* [React Prop Types](https://www.npmjs.com/package/prop-types)
* [Cypress](https://www.cypress.io/)

## Setup
* To access the site on your local machine:
  * Clone down the repo through the command line
  * Run ```$npm install``` to install dependencies
  * Run ```$npm start``` to open the page on a local browser
* Otherwise the site is deployed onto heroku and accessible [here](https://rottenturtletales.herokuapp.com/) 

## Running Tests
* After completing the setup steps above:
  * Run ```$npx cypress open``` to open up the test suite
  * From there click on the tomatillos-test file to open it in your browser and watch the tests run automatically
