# budget-buddy-capstone
The purpose of this app is to make budgeting fun, by helping the user plan their financial goals, and track their expenses in order to meet those goals.


# MVP workflow

### Intro Screen
* -->Intro statement explaining the purpose of the app.
* ---->Buttons to login/register.
* ------>Preview Icons to show what the app can do.
### Login Screen
* -->Login form with name and password.
* ---->Button to login that takes you to user home page.
* ------>Demo Option available with credentials posted above the form.
### Register Screen
* -->Link to login page for demo option
* ---->Register form with name, password, and confirm password as inputs.
* ------>Register button that takes you to login page.
### Home Screen
* -->Financial Goals section with a table displaying all goals.
* ---->Add button to add a new goal item to your table, which takes you to the add goal page.
* ------>Edit/Delete options on each item; edit button takes you to the edit goal page.
* -------->Monthly Budgets section with a table displaying all budgets for a specific month.
* ---------->Add button to add a new budget item to your table, which takes you to the add budget page.
* ------------>Edit/Delete options on each item; edit button takes you to the edit budget page.
* ------------->Select Option to view budget for a different month, which holds the months total budget amount in parenthesis, for a quick view.
### Add Budget Item Screen/Nav Budget Option
* --> Budget Form with description, date, budgeted, actual, and type as input options. All are required.
* ---->Button to add budget to the monthly budget that fits the inputed date; then displays the home screen with updated budget
* ------>Cancel button to abort adding a budget item, and return to home screen.
### Add Goal Item Screen/Nav Goal Option
* --> Financial Goal Form with description, date, budgeted, and actual as input options. All are required.
* ---->Button to add goal to the goal table; then displays the home screen with updated goal table.
* ------>Cancel button to abort adding a goal item, and return to home screen.
### Edit Budget Item Screen
* --> Budget Form with description, date, budgeted, actual, and type as input options, with the original input of selected budget. All are required.
* ---->Button to add newly edited budget to the monthly budget that fits the inputed date; then displays the home screen with updated budget
* ------>Cancel button to abort editing a budget item, and return to home screen.
### Edit Goal Item Screen
* --> Financial Goal Form with description, date, budgeted, and actual as input options, with original input of selected goal. All are required.
* ---->Button to add goal to the financial goals table; then displays the home screen with updated budget
* ------>Cancel button to abort editing a goal item, and return to home screen.
### Nav Option Logout
* -->Clears all infomation, and returns user to intro screen.

# User Stories
* As a user I want to have a clear understanding of the sites purpose in order to create some financial goals, and be able to achieve those goals by budgeting and tracking expenses.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/intro-page.JPG)

* As a user I want to be able to view my finacial informarion in a clear and organzied way.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/home-page.JPG)

* As a user I want to be able to create a budget for the month, to help keep me on track when trying to save money.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/budget-page.JPG)

* As a user I want to input the infomation i want for my budget.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/budget-form-page.JPG)

* As a user I want to view my monthly totals in a quick and organized way on the main screen.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/budget-quick-view-page.JPG)

* As a user I want to view my financial goals, and track how close i am to them.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/goals-page.JPG)

* As a user I want to login to the budget buddy app, in a clear and organized way.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/login-page.JPG)

* As a user I want to register an account with the budget buddy app, in a quick and easy way.
![Use Case](https://github.com/bgerardi20/budget-buddy-react-capstone/blob/master/github-images/sign-up.JPG)

* As a user I want to track my monthly unexpected transactions, to better manage my spending.
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
Find a working prototype with Node at https://budget-buddy-react-capstone.herokuapp.com/ and with React at https://bgerardi20.github.io/budget-buddy-react-capstone-react/build


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


## How to run the app:

### Node command lines
* npm install ==> install all node modules
* nodemon server.js ==> run node server
* npm test ==> run the tests

### React command lines
* npm install ==> install all node modules
* npm run build ==> build the react files in the "build" folder
* npm start ==> run react server on http://127.0.0.1:8080
* npm test ==> run the tests


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

####
*Add functionality button that allows user to copy a budget item to auto-populate in every month
