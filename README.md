# recipe-node-capstone
The purpose of this app is to make budgeting fun, by helping the user plan their financial goals, and track their expenses in order to meet those goals.


# MVP workflow

### Intro Screen
* -->
* ---->
* ------>
### Login Screen
* -->
* ---->
* ------>
### Register Screen
* -->
* ---->
* ------>
* -------->
* ---------->
* ------------>
### Home Screen
* -->
* ---->
* ------>
* -------->
* ---------->
* ------------>
### Add Budget Item Screen
* -->
* ---->
* ------>
* -------->
* ---------->
* ------------>
### Add Goal Item Screen
* -->
* ---->
* ------>
* -------->
* ---------->
* ------------>
### Edit Budget Item Screen
* -->
* ---->
* ------>
* -------->
* ---------->
* ------------>
### Edit Goal Item Screen
* -->
* ---->
* ------>
* -------->
* ---------->
* ------------>


# User Stories
* As a user I want to have a clear understanding of the sites purpose in order to create some financial goals, and be able to achieve those goals by budgeting and tracking expenses.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/intro-page.JPG)

* As a user I want to be able to view my finaces in a clear and organzied way.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/home-page.JPG)

* As a user I want to be able to create a budget for the month, to help keep me on track when trying to save money.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/budget-page.JPG)

* As a user I want to
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/budget-form-page.JPG)

* As a user I want to
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/budget-quick-view-page.JPG)

* As a user I want to
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/goals-page.JPG)

* As a user I want to
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/login-page.JPG)

* As a user I want to
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/sign-up.JPG)

* As a user I want to
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/transaction-page.JPG)


# Screenshots
![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/intro-screen-screenshot.png)

![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/login-screen-screenshot.png)

![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/register-screen-screenshot.png)

![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/home-screen-screenshot.png)

![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/add-budget-screenshot.png)

![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/add-goal-screenshot.png)

![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/edit-budget-screenshot.png)

![Screenshot](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/edit-goal-screenshot.png)


# Working Prototype
Find a working prototype with Node at https://budget-buddy-react-capstone.herokuapp.com/


# Functionality
* When the user brings up the landing page it explains the pupose of the app.
* The user then creates a profile with their name, or uses the demo account.
* The user can add a budget item to the budget, which is then sorted by month.
* The user can add a financial goal to their goal list, which will tell you how far away you are to your goal.
* The user can see the total amount for all the monthly budget items that have been created.
* The user can track expenses in the budget by indicating if the item is an expense or income, which will be tallied at the end.
* The user can edit/delete any budget or goal item attributed to their account
* The user can set different budgets for different months, and with their total automatically figured out for them, can see where they are for the year in a fast and organized way.


# Technical

### Front End
* HTML5
* CSS3
* JavaScript
* jQuery
* React
* Redux

### Back End
* Node.js with Heroku implementation
* Express.js
* MongoDB on mLab
* Mongoose
* Mocha and Chai
* React
* Redux


# Responsive
The app is responsive and optimized for both desktop and mobile viewing and use.


# API Documentation

### API endpoints for the back end include:

* POST to '/users/create' for creating a new user
* POST to '/users/signin' to login a user
* POST to '/budget/create' for creating a new budget item
* POST to '/goal/create' for creating a new goal item
* PUT to '/goal/:goalId' to update goal item
* PUT to '/budget/:budgetId' to update budget item
* GET to '/check-registration-name/:firstName' to check if the username is already taken in the DB
* GET to '/budgets/:userId' to get budgets saved to the user
* GET to '/budget-by-month/:userId/:date' to get the budget items for a specific month
* GET to '/goals/:userId' to get the goals saved to the user
* GET to '/goal/:id' to get goal to be updated by id
* GET to '/budget/:id' to get budget to be updated by id
* DELETE to '/goals/:id' to delete a goal item
* DELETE to '/budgets/:id' to delete a budget item


# Development Roadmap

### Planned additional features and improvements will allow users to:

####
*Add an option to save expenses for the budget for each month

####
*Add functionality to sort budgets by expense and income

####
*Add functionality to sort goals by acheived or not acheived

####
*Add functionality to show if user is "under budget, over budget, or even" for whatever month he chooses to view.
