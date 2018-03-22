# recipe-node-capstone

The purpose of this app is to create an recipe book that you can have with you wherever you go.

# MVP workflow
### Intro screen.
* --> Intro, explains app.
* ----> User login or create user.
* ------> rings user to their library.
### Home Screen.
* --> User's recipe library.
* ----> Searchbar, search recipe by keywords or by specific recipe.
* ------> User selects the recipe of their choosing.
* -------->Recipe is added to recipe library and saved.
* ---------->Search for another recipe.
* ------------>Return to users library.
### Screen displays information about selected recipe in library.
* --> User is given ingredients for recipe.
* ----> User can modify ingredient list.
* ------> Modification is added to log, with date and what ingredient was modified.
* --------> Button redirects to orignal recipe url, with exact directions for recipe.
* ----------> Textbox for manual input of directions(optional).
* ------------> User can delete recipe from recipe library.
### Create Screen.
* --> Form, user can create own recipe to add to library.
* ----> Title input, user creates title for recipe.
* ------> Photo upload, user uploads photo for recipe.
* --------> Ingredients list, user lists ingredients for recipe.
* ----------> Directions textbox, user lists directions for recipe.
* ------------>Save button, saves new recipe to library.

# User Stories
* As a user I want to have a clear understanding of the sites purpose in order to create a library for the recipes i've searched and want to try.
![Use Case](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/intro-screen.JPG)

* As a user I want to be able to make a quick search for recipes i'm intrested in, and add the ones I like to my saved library.
![Use Case](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/home-screen.JPG)


* As a user I want to be able to view the recipes that match my search criteria, and add the ones I like to my saved library.
![Use Case](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/search-screen.JPG)


* As a user I want to be able to customize the ingredients that are attributed to a specific recipe in my library.
![Use Case](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/recipe-screen.JPG)


* As a user I want to be able to upload my own personal recipes to my library.
![Use Case](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/create-screen.JPG)



# Screenshots
![Screenshot](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/introduction-page.png)

![Screenshot](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/sign-in-page.png)

![Screenshot](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/create-account-page.png)

![Screenshot](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/recipe-library-page.png)

![Screenshot](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/create-recipe-page.png)

![Screenshot](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/search-screen-page.png)

![Screenshot](https://github.com/bgerardi20/my-recipe-finder-node-capstone/blob/master/github-images/search-results-page.png)

# Working Prototype
Find a working prototype with Node at https://budget-buddy-react-capstone.herokuapp.com/

# Functionality
* When the user brings up the landing page it explains the pupose of the app.
* The user then creates a profile with their email(logs in if already created), or continues without saving.
* The user can search for recipes by a keywords or key pharases.
* The user can choose a recipe of intrest, and upload it to their personal library.
* The user can modify the original recipe however they choose.
* The user can manually input directions into textbox to save for future use.
* The user can delete a recipe from their library.

# Technical

### Front End
* HTML5
* CSS3
* JavaScript
* jQuery

### Back End
* Node.js with Heroku implementation
* Express.js
* MongoDB on mLab
* Mongoose
* Mocha and Chai
* Edamam API

# Responsive
The app is responsive and optimized for both desktop and mobile viewing and use.

# API Documentation
### API endpoints for the back end include:

* POST to '/users/create' for creating a new user
* POST to '/users/signin' to sign in an existing user
* POST to '/recipes/create' for creating a new recipe
* PUT to '/recipes/:id' to update a saved recipe
* GET to '/recipes/:userId' to access all of a user's saved recipes
* DELETE to '/recipes/:id' to delete a single saved recipe

# Development Roadmap

### Planned additional features and improvements will allow users to:

#### Automatic direction upload:
* Currently can't upload directions to saved recipe automatically.

#### Social Media Presence:
* Would like for users to be able to share to social media the changes they've made to recipes, recipes they created themself, or just a recipe they really liked from a search.

#### Nutrtion Guide:
* Would like to include all nutritional information for those who choose to view it.

#### Allergy Search:
* I would like to have a allergy option implemented, in order to reach more users, and to help those with allergies still be able to find great recipes.
