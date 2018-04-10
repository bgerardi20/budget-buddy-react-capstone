//capitalize first letter function
function titleCase(str) {
    return str.split(' ').map(function (val) {
        return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    }).join(' ');
};
//UNDER BUDGET, OVER BUDGET, EVEN
function budgetCondtionalChecker() {
    let totalActual = "";
    let totalBudgeted = "";

    if (totalBudgeted > totalActual) {
        $(".budgetConditionalOptionsPositive").show();
        $(".budgetConditionalOptionsNegative").hide();
        $(".budgetConditionalOptionsEven").hide();
    } else if (totalBudgeted < totalActual) {
        $(".budgetConditionalOptionsPositive").hide();
        $(".budgetConditionalOptionsNegative").show();
        $(".budgetConditionalOptionsEven").hide();
    } else if (totalBudgeted === totalActual) {
        $(".budgetConditionalOptionsPositive").hide();
        $(".budgetConditionalOptionsNegative").hide();
        $(".budgetConditionalOptionsEven").show();
    };
};



//
//var goalBudgetTotal = document.querySelectorAll('#budgetedGoal').val();
//var goalActualTotal = document.querySelectorAll('#actualGoal').val();
//var goalDifferenceTotal = goalActualTotal - goalBudgetTotal
//
//function goalActualAdder() {
//    var buildTheHtmlOutput = "";
//    var goalActual = "";
//    var i;
//    for (i = 0; i < goalActual.length; i++) {
//        buildTheHtmlOutput += goalActual[i] + "<br>";
//    }
//    console.log(buildTheHtmlOutput);
//}



//define objects variables functions
let loginUserName = "";
let loginUserId = "";


//display users budgets
function displayBudgets(userId) {
    console.log(userId);
    $.ajax({
            type: "GET",
            url: '/budgets/' + userId,
            dataType: 'json',
        })
        .done(function (dataOutput) {
            console.log(dataOutput);
            //displays the external api json object in the console
            displayBudgetResult(dataOutput.budgets);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

//display users goals
function displayGoals(userId) {
    console.log(userId);
    $.ajax({
            type: "GET",
            url: '/goals/' + userId,
            dataType: 'json',
        })
        .done(function (dataOutput) {
            console.log(dataOutput);
            //displays the external api json object in the console
            displayFinancialGoalResult(dataOutput.goals);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}
//adding value to each input option!!!
//goal html output
function displayFinancialGoalResult(dataOutput) {
    var buildTheHtmlOutput = "";
    buildTheHtmlOutput += '<div class="row rowTitle">';
    buildTheHtmlOutput += '<div class="cellTrans">Descritpion</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Date</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Budgeted</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Actual</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Difference</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Action</div>';
    buildTheHtmlOutput += '</div>';
    $.each(dataOutput, function (dataKey, dataValue) {
        console.log(dataValue);
        buildTheHtmlOutput += '<div class="row">';
        buildTheHtmlOutput += '<input class="loggedInUser" type="hidden" id="modifyGoalRecipeID" value="' + dataValue._id + '">';
        if ((dataValue.actual) - (dataValue.budgeted) >= 0) {
            buildTheHtmlOutput += '<div class="cellTrans modifyDescription"><i class="fas fa-thumbs-up positive typeIcon"></i>' + dataValue.description + '</div>';
        } else {
            buildTheHtmlOutput += '<div class="cellTrans modifyDescription"><i class="fas fa-thumbs-down negative typeIcon"></i>' + dataValue.description + '</div>';
        }
        buildTheHtmlOutput += '<div class="cellTrans modifyDate">' + dataValue.date + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans modifyBudgeted">$' + dataValue.budgeted + '.00</div>';
        buildTheHtmlOutput += '<div class="cellTrans modifyActual">$' + dataValue.actual + '.00</div>';
        if ((dataValue.actual - dataValue.budgeted) >= 0) {
            buildTheHtmlOutput += '<div class="cellTrans positive ">$' + (dataValue.actual - dataValue.budgeted) + '.00</div>';
        } else if ((dataValue.actual - dataValue.budgeted) < 0) {
            buildTheHtmlOutput += '<div class="cellTrans negative ">$' + (dataValue.actual - dataValue.budgeted) + '.00</div>';
        }
        buildTheHtmlOutput += '<div class="cellTrans">';
        buildTheHtmlOutput += '<a class="jsCopyGoalButton" href=""><i class="fas fa-copy tableIcons"></i></a>';
        buildTheHtmlOutput += '<a class="tableTriggerGoalButton" href=""><i class="fas fa-pen-square tableIcons"></i></a>';
        buildTheHtmlOutput += '<a class="jsDeleteGoalButton" href=""><i class="fas fa-trash-alt tableIcons"></i></a>';
        buildTheHtmlOutput += '</div>';

        buildTheHtmlOutput += '</div>';
    });
    buildTheHtmlOutput += '<div class="row budgetTotalContainer" id="goalTotal">';
    buildTheHtmlOutput += '<div class="cellTrans">Totals</div>';
    buildTheHtmlOutput += '<div class="cellTrans"> </div>';
    buildTheHtmlOutput += '<div class="cellTrans" id="goalBudgetedTotal"></div>';
    buildTheHtmlOutput += '<div class="cellTrans" id="goalActualTotal"></div>';
    buildTheHtmlOutput += '<div class="cellTrans negative" id="goalTotal"></div>';
    buildTheHtmlOutput += '<div class="cellTrans"> </div>';
    buildTheHtmlOutput += '</div>';


    $(".homeSectionsTable").html(buildTheHtmlOutput);
};
//edited goal output
function displayEditedGoalForm(dataOutput) {
    var buildTheHtmlOutput = "";

    buildTheHtmlOutput += '<form class="jsEditedGoalForm" method="POST">';
    buildTheHtmlOutput += '<h2 class="loginTitle">Edit Goal</h2>';
    $.each(dataOutput, function (dataKey, dataValue) {
        console.log(dataValue);

        buildTheHtmlOutput += '<input class="loggedInUser" id="modifyGoalRecipeID" type="hidden" value="' + dataValue._id + '"><br>';

        buildTheHtmlOutput += '<div class="demoContainer">';
        buildTheHtmlOutput += '<div class="formGroup">';
        buildTheHtmlOutput += '<label class="label" for="goalDescription">Description</label>';
        buildTheHtmlOutput += '<input class="formControl" id="editGoalDescription" type="text" name="description" value="' + dataValue.description + '" required>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<div class="formGroup">';
        buildTheHtmlOutput += '<label class="label" for="date">Date</label>';
        buildTheHtmlOutput += '<input class="formControl" id="editGoalDate" type="string" name="date" value="' + dataValue.date + '" required>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<div class="formGroup">';
        buildTheHtmlOutput += '<label class="label" for="budgetedGoal">Budgeted</label>';
        buildTheHtmlOutput += '<input class="formControl" id="editBudgetedGoal" type="number" name="budgeted" min="0.00" max="100,000.00" step="1.00" value="$' + dataValue.budgeted + '" required>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<div class="formGroup">';
        buildTheHtmlOutput += '<label class="label" for="actualGoal">Actual</label>';
        buildTheHtmlOutput += '<input class="formControl" id="editActualGoal" type="number" name="actual" min="0.00" max="100,000.00" step="1.00" value="$' + dataValue.actual + '" required>';
        buildTheHtmlOutput += '</div>';
    });
    buildTheHtmlOutput += '<div class="formButtonsContainer">';
    buildTheHtmlOutput += '<button class="formButton" id="editSaveGoalForm" type="submit">Save</button>';
    buildTheHtmlOutput += '<button class="formButton" id="editCancelGoalForm" type="submit">Cancel</button>';
    buildTheHtmlOutput += '</div>';
    buildTheHtmlOutput += '</div>';
    buildTheHtmlOutput += '</form>';


    $(".editedGoalsOutterContainer").html(buildTheHtmlOutput);
};

//budget html output
function displayBudgetResult(dataOutput) {

    var buildTheHtmlOutput = "";

    buildTheHtmlOutput += '<div class="row rowTitle">';
    buildTheHtmlOutput += '<div class="cellTrans">Descritpion</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Date</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Budgeted</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Actual</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Difference</div>';
    buildTheHtmlOutput += '<div class="cellTrans">Action</div>';
    buildTheHtmlOutput += '</div>';

    $.each(dataOutput, function (dataKey, dataValue) {
        console.log(dataValue);

        buildTheHtmlOutput += '<input type="hidden" class="modifyBudgetRecipeID" value="' + dataValue._id + '">';
        buildTheHtmlOutput += '<input type="hidden" class="modifyBudgetType" value="' + dataValue.type + '">';

        buildTheHtmlOutput += '<div class="row">';
        if (dataValue.type == 'expense') {
            buildTheHtmlOutput += '<div class="cellTrans modifyBudgetDescription"><i class="fas fa-level-down-alt typeIcon negative"></i>' + dataValue.description + '</div>';
        } else {
            buildTheHtmlOutput += '<div class="cellTrans modifyBudgetDescription"><i class="fas fa-level-up-alt typeIcon positive"></i>' + dataValue.description + '</div>';
        }
        buildTheHtmlOutput += '<div class="cellTrans modifyBudgetDate">' + dataValue.date + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans modifyBudgetBudgeted">$' + dataValue.budgeted + '.00</div>';
        buildTheHtmlOutput += '<div class="cellTrans modifyBudgetActual">$' + dataValue.actual + '.00</div>';
        if (dataValue.type === 'expense' && (dataValue.budgeted - dataValue.actual > 0)) {
            buildTheHtmlOutput += '<div class="cellTrans positive ">$' + (dataValue.budgeted - dataValue.actual) + '.00</div>';
        } else if (dataValue.type === 'expense' && (dataValue.budgeted - dataValue.actual < 0)) {
            buildTheHtmlOutput += '<div class="cellTrans negative ">$' + (dataValue.budgeted - dataValue.actual) + '.00</div>';
        } else if (dataValue.type === 'expense' && (dataValue.budgeted - dataValue.actual == 0)) {
            buildTheHtmlOutput += '<div class="cellTrans middle ">$' + (dataValue.budgeted - dataValue.actual) + '.00</div>';
        } else if (dataValue.type === 'income' && (dataValue.actual - dataValue.budgeted > 0)) {
            buildTheHtmlOutput += '<div class="cellTrans positive ">$' + (dataValue.actual - dataValue.budgeted) + '.00</div>';
        } else if (dataValue.type === 'income' && (dataValue.actual - dataValue.budgeted < 0)) {
            buildTheHtmlOutput += '<div class="cellTrans negative ">$' + (dataValue.actual - dataValue.budgeted) + '.00</div>';
        } else if (dataValue.type === 'income' && (dataValue.actual - dataValue.budgeted == 0)) {
            buildTheHtmlOutput += '<div class="cellTrans middle ">$' + (dataValue.actual - dataValue.budgeted) + '.00</div>';
        }

        buildTheHtmlOutput += '<a class="jsCopyBudgetButton" href=""><i class="fas fa-copy tableIcons"></i></a>';
        buildTheHtmlOutput += '<a class="tableTriggerBudgetButton" href=""><i class="fas fa-pen-square tableIcons"></i></a>';
        buildTheHtmlOutput += '<a class="jsDeleteBudgetButton" href=""><i class="fas fa-trash-alt tableIcons"></i></a>';
        buildTheHtmlOutput += '</div>';

        buildTheHtmlOutput += '</div>';
    });
    buildTheHtmlOutput += '<div class="row budgetTotalContainer" id="budgetTotal">';
    buildTheHtmlOutput += '<div class="cellTrans">Totals</div>';
    buildTheHtmlOutput += '<div class="cellTrans"> </div>';
    buildTheHtmlOutput += '<div class="cellTrans"> </div>';
    buildTheHtmlOutput += '<div class="cellTrans"> </div>';
    buildTheHtmlOutput += '<div class="cellTrans negative"></div>';
    buildTheHtmlOutput += '<div class="cellTrans"> </div>';
    buildTheHtmlOutput += '</div>';


    $(".table").html(buildTheHtmlOutput);
};

$(document).ready(function () {
    $(".introScreen").show();
    $(".quickView").show();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//login button
$(document).on("click", ".jsLoginButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").show();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//register button
$(document).on("click", ".jsRegisterButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").show();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//user loging in
$(document).on("click", ".jsSubmitloginButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let name = $('#loginFirstName').val();
    let password = $('#loginPassword').val();
    let userId = $('.loginUserId').val();
    //validate the input//
    if (name.length == 0) {
        alert('Please add name!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else {
        //if input is valid; sign in the user//
        const loginUserObject = {
            name: name,
            password: password,
            userId: loginUserId
        };
        console.log(loginUserObject);
        // create ajax call to sign in the user//
        $.ajax({
                type: 'POST',
                url: '/users/signin',
                dataType: 'json',
                data: JSON.stringify(loginUserObject),
                contentType: 'application/json'
            })
            //if sign in is successful
            .done(function (result) {
                loginUserName = result.name;
                loginUserId = result._id;
                displayBudgets(loginUserId);
                displayGoals(loginUserId);
                $(".resultTitle span").text(titleCase(result.name) + "'s ");
                $(".loginUserId").val(loginUserId);
                $(".loginUserName").val(loginUserName);
                $(".introScreen").hide();
                $(".quickView").hide();
                $(".loginScreen").hide();
                $(".registerScreen").hide();
                $(".homeScreen").show();
                $(".homeScreenBudget").hide();
                $(".homeScreenGoals").hide();
                $(".editHomeScreenBudget").hide();
                $(".editHomeScreenGoals").hide();
            })
            //if sign in fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});

//user registration
$(document).on("click", ".jsSubmitRegisterButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let name = $('#registerName').val();
    let password = $('#registerPassword').val();
    let confirmPassword = $('#registerConfirmPassword').val();

    //validate the input//
    if (name.length == 0) {
        alert('Please add name!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else if (password !== confirmPassword) {
        alert('Passwords must match!');
    } else {
        //check if user is duplicated
        $.ajax({
                type: "GET",
                url: '/check-registration-name/' + name,
                dataType: 'json',
            })
            .done(function (dataOutput) {
                //displays the external api json object in the console
                console.log(dataOutput);
                if (dataOutput.users.length > 0) {
                    alert('Duplicated first name, try a different name');
                } else {
                    //if input is valid; register the user//
                    const newUserObject = {
                        name: name,
                        password: password
                    };
                    console.log(newUserObject);
                    // create ajax call to register the user//
                    $.ajax({
                            type: 'POST',
                            url: '/users/create',
                            dataType: 'json',
                            data: JSON.stringify(newUserObject),
                            contentType: 'application/json'
                        })
                        //if registation is successful
                        .done(function (result) {
                            loginUserId = result._id;
                            $(".loginUserId").val(loginUserId);
                            //                            console.log(result);
                            alert('Thanks for registering! You may now login with your username and password.');
                            $(".introScreen").hide();
                            $(".quickView").hide();
                            $(".loginScreen").show();
                            $(".registerScreen").hide();
                            $(".homeScreen").hide();
                            $(".homeScreenBudget").hide();
                            $(".homeScreenGoals").hide();
                            $(".editHomeScreenBudget").hide();
                            $(".editHomeScreenGoals").hide();
                        })
                        //if registration fails
                        .fail(function (jqXHR, error, errorThrown) {
                            console.log(jqXHR);
                            console.log(error);
                            console.log(errorThrown);
                        });
                }
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });

    };
});

//nav item
$(document).on("click", ".jsHomeNav", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").show();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//nav item
$(document).on("click", ".jsBudgetNav", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").show();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//nav item
$(document).on("click", ".jsGoalNav", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").show();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//nav item
$(document).on("click", ".jsLogoutNav", function (event) {
    event.preventDefault();
    $(".introScreen").show();
    $(".quickView").show();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//copy goal icon button
$(document).on("click", ".jsCopyGoalButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").show();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//edit goal icon button
$(document).on("click", ".tableTriggerGoalButton", function (event) {
    event.preventDefault();


    let selectedGoal = $(this).parent().parent().find("#modifyGoalRecipeID").val();

    let selectedDescription = $(this).parent().parent().find("#budgetDescription").val();
    let selectedDate = $(this).parent().parent().find(".modifyDate").val();
    let selectedBudgeted = $(this).parent().parent().find(".modifyBudgeted").val();
    let selectedActual = $(this).parent().parent().find(".modifyActual").val();
    console.log(selectedDescription);
    //get endpoint to take selected goal from aboce and find all the goals which have the same id(selectedGoal)
    //new endpoint in server and in here
    //prepopulate the form
    //new displayGoals fucntion
    $.ajax({
            type: "GET",
            url: '/goals/' + selectedGoal,
            dataType: 'json',
        })
        .done(function (dataOutput) {
            console.log(dataOutput);
            //displays the external api json object in the console
            displayGoals(loginUserId);
            displayEditedGoalForm(dataOutput);
            $(".introScreen").hide();
            $(".quickView").hide();
            $(".loginScreen").hide();
            $(".registerScreen").hide();
            $(".homeScreen").hide();
            $(".homeScreenBudget").hide();
            $(".homeScreenGoals").hide();
            $(".editHomeScreenBudget").hide();
            $(".editHomeScreenGoals").show();
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

});

//delete goal icon button
$(document).on("click", ".jsDeleteGoalButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").show();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//copy budget icon button
$(document).on("click", ".jsCopyBudgetButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").show();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//edit budget icon button
$(document).on("click", ".jsEditBudgetButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").show();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//delete budget icon button
$(document).on("click", ".jsDeleteBudgetButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").show();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//add budget transaction form button
$(document).on("click", "#addBudgetFormButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").show();
    $(".homeScreenGoals").hide();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();

});

//add goal form button
$(document).on("click", "#addGoalFormButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").show();
    $(".editHomeScreenBudget").hide();
    $(".editHomeScreenGoals").hide();
});

//create budgets for user
$(document).on("click", "#saveBudgetForm", function (event) {
    event.preventDefault();
    //get input from the user//
    let description = $('#budgetDescription').val();
    let date = $('#budgetDate').val();
    let budgeted = $('#budgetBudgeted').val();
    let actual = $('#budgetActual').val();
    let type = $('#budgetType').val();
    let userIdHidden = $('.loginUserId').val();
    //validate the input//
    if (description.length == 0) {
        alert('Please add a description!');
    } else if (date.length == 0) {
        alert('Please add a date!');
    } else if (budgeted.length == 0) {
        alert('Please add a budget amount!');
    } else if (actual.length == 0) {
        alert('Please add an actual amount!');
    } else if (type.length == 0) {
        alert('Please add a type!');
    } else {
        //if input is valid; create the new recipe//
        const newBudgetObject = {
            description: description,
            date: date,
            budgeted: budgeted,
            actual: actual,
            type: type,
            userId: userIdHidden
        };
        // create ajax call to create the new recipe//
        $.ajax({
                type: 'POST',
                url: '/budget/create',
                dataType: 'json',
                data: JSON.stringify(newBudgetObject),
                contentType: 'application/json'
            })
            //if budget creation is successful
            .done(function (result) {
                displayBudgets(userIdHidden);
                console.log(result);
                $(".introScreen").hide();
                $(".quickView").hide();
                $(".loginScreen").hide();
                $(".registerScreen").hide();
                $(".homeScreen").show();
                $(".homeScreenBudget").hide();
                $(".homeScreenGoals").hide();
                $(".editHomeScreenBudget").hide();
                $(".editHomeScreenGoals").hide();
            })
            //if recipe creation fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
});


//create goals for user
$(document).on("click", "#saveGoalForm", function (event) {
    event.preventDefault();
    //get input from the user//
    let description = $('#goalDescription').val();
    let date = $("#goalDate").val();
    let budgeted = $('#budgetedGoal').val();
    let actual = $('#actualGoal').val();
    let userIdHidden = $('.loginUserId').val();
    //validate the input//
    if (description.length == 0) {
        alert('Please add a description!');
    } else if (date.length == 0) {
        alert('Please add a date!');
    } else if (budgeted.length == 0) {
        alert('Please add a budget amount!');
    } else if (actual.length == 0) {
        alert('Please add an actual amount!');
    } else {
        //if input is valid; create the new recipe//
        const newGoalObject = {
            description: description,
            date: date,
            budgeted: budgeted,
            actual: actual,
            userId: userIdHidden
        };
        // create ajax call to create the new recipe//
        $.ajax({
                type: 'POST',
                url: '/goal/create',
                dataType: 'json',
                data: JSON.stringify(newGoalObject),
                contentType: 'application/json'
            })
            //if budget creation is successful
            .done(function (result) {
                displayGoals(userIdHidden);
                console.log(result);
                $(".introScreen").hide();
                $(".quickView").hide();
                $(".loginScreen").hide();
                $(".registerScreen").hide();
                $(".homeScreen").show();
                $(".homeScreenBudget").hide();
                $(".homeScreenGoals").hide();
                $(".editHomeScreenBudget").hide();
                $(".editHomeScreenGoals").hide();
            })
            //if recipe creation fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
});

//modify goal
//$(document).on("click", "#editSaveGoalForm", function (event) {
//    event.preventDefault();
//    let modifyGoalId = $(this).parent().parent().parent().find('#editGoalMyHiddenField').val();
//
//    let modifyGoalDescription = $(this).parent().parent().parent().find('.modifyDescription').val();
//    let modifyGoalDate = $(this).parent().parent().parent().find('.modifyDate').val();
//    let modifyGoalBudgeted = $(this).parent().parent().parent().find('.modifyBudgeted').val();
//    let modifyGoalActual = $(this).parent().parent().parent().find('.modifyActual').val();
//
//    const modifyGoalObject = {
//        description: modifyGoalDescription,
//        date: modifyGoalDate,
//        budgeted: modifyGoalBudgeted,
//        actual: modifyGoalActual
//    };
//    // create ajax call to save the recipe//
//    //goals or goal????//
//    $.ajax({
//            type: 'PUT',
//            url: '/goals/' + modifyGoalId,
//            dataType: 'json',
//            data: JSON.stringify(modifyGoalObject),
//            contentType: 'application/json'
//        })
//        //if save is successful
//        .done(function (result) {
//            displayGoals(loginUserId);
//            alert('goal has been saved');
//            $(".introScreen").hide();
//            $(".quickView").hide();
//            $(".loginScreen").hide();
//            $(".registerScreen").hide();
//            $(".homeScreen").show();
//            $(".homeScreenBudget").hide();
//            $(".homeScreenGoals").hide();
//            $(".editHomeScreenBudget").hide();
//            $(".editHomeScreenGoals").hide();
//        })
//        //if save fails
//        .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//        });
//});

//modify(edited) goal
//$(document).on("click", ".editSaveGoalForm", function (event) {
//    event.preventDefault();
//    let modifyGoalId = $(this).parent().parent().parent().find('.modifyRecipeID').val();
//
//    let modifyGoalDescription = $(this).parent().parent().parent().find('.modifyDescription').val();
//    let modifyGoalDate = $(this).parent().parent().parent().find('.modifyDate').val();
//    let modifyGoalBudgeted = $(this).parent().parent().parent().find('.modifyBudgeted').val();
//    let modifyGoalActual = $(this).parent().parent().parent().find('.modifyActual').val();
//
//    const modifyGoalObject = {
//        description: modifyGoalDescription,
//        date: modifyGoalDate,
//        budgeted: modifyGoalBudgeted,
//        actual: modifyGoalActual
//    };
//    // create ajax call to save the recipe//
//    //goals or goal????//
//    $.ajax({
//            type: 'PUT',
//            url: '/goals/' + modifyGoalId,
//            dataType: 'json',
//            data: JSON.stringify(modifyGoalObject),
//            contentType: 'application/json'
//        })
//        //if save is successful
//        .done(function (result) {
//            displayGoals(loginUserId);
//            alert('goal has been saved');
//            $(".introScreen").hide();
//            $(".quickView").hide();
//            $(".loginScreen").hide();
//            $(".registerScreen").hide();
//            $(".homeScreen").show();
//            $(".homeScreenBudget").hide();
//            $(".homeScreenGoals").hide();
//        })
//        //if save fails
//        .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//        });
//});

//modify budget
$(document).on("click", ".jsEditBudgetButton", function (event) {
    event.preventDefault();
    let modifyRecipeId = $(this).parent().parent().parent().find('.modifyRecipeID').val();

    let modifyBudgetDescription = $(this).parent().parent().parent().find('.modifyBudgetDescription').val();
    let modifyBudgetDate = $(this).parent().parent().parent().find('.modifyBudgetDate').val();
    let modifyBudgetBudgeted = $(this).parent().parent().parent().find('.modifyBudgetBudgeted').val();
    let modifyBudgetActual = $(this).parent().parent().parent().find('.modifyBudgetActual').val();
    let modifyBudgetType = $(this).parent().parent().parent().find('.modifyBudgetType').val();

    const modifyRecipeObject = {
        description: modifyBudgetDescription,
        date: modifyBudgetDate,
        budgeted: modifyBudgetBudgeted,
        actual: modifyBudgetActual,
        type: modifyBudgetType
    };
    // create ajax call to save the recipe//
    $.ajax({
            type: 'PUT',
            url: '/budgets/' + modifyRecipeId,
            dataType: 'json',
            data: JSON.stringify(modifyRecipeObject),
            contentType: 'application/json'
        })
        //if save is successful
        .done(function (result) {
            displayBudgets(loginUserId);
            alert('budget has been saved');
            $(".introScreen").hide();
            $(".quickView").hide();
            $(".loginScreen").hide();
            $(".registerScreen").hide();
            $(".homeScreen").show();
            $(".homeScreenBudget").hide();
            $(".homeScreenGoals").hide();

            $(".editHomeScreenBudget").hide();
            $(".editHomeScreenGoals").hide();
        })
        //if save fails
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

//modify(edited) budget
$(document).on("click", ".editSaveBudgetForm", function (event) {
    event.preventDefault();
    let modifyRecipeId = $(this).parent().parent().parent().find('#seditBudgetMyHiddenField').val();

    let modifyBudgetDescription = $(this).parent().parent().parent().find('#editBudgetDescription').val();
    let modifyBudgetDate = $(this).parent().parent().parent().find('#editBudgetDate').val();
    let modifyBudgetBudgeted = $(this).parent().parent().parent().find('#editBudgetBudgeted').val();
    let modifyBudgetActual = $(this).parent().parent().parent().find('#editBudgetActual').val();
    let modifyBudgetType = $(this).parent().parent().parent().find('#editBudgetType').val();

    const modifyRecipeObject = {
        description: modifyBudgetDescription,
        date: modifyBudgetDate,
        budgeted: modifyBudgetBudgeted,
        actual: modifyBudgetActual,
        type: modifyBudgetType
    };
    // create ajax call to save the recipe//
    $.ajax({
            type: 'PUT',
            url: '/budgets/' + modifyRecipeId,
            dataType: 'json',
            data: JSON.stringify(modifyRecipeObject),
            contentType: 'application/json'
        })
        //if save is successful
        .done(function (result) {
            displayBudgets(loginUserId);
            alert('budget has been saved');
            $(".introScreen").hide();
            $(".quickView").hide();
            $(".loginScreen").hide();
            $(".registerScreen").hide();
            $(".homeScreen").show();
            $(".homeScreenBudget").hide();
            $(".homeScreenGoals").hide();
            $(".editHomeScreenBudget").hide();
            $(".editHomeScreenGoals").hide();
        })
        //if save fails
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

//delete goal
$(document).on("click", ".jsDeleteGoalButton", function (event) {
    event.preventDefault();
    let modifyRecipeID = $(this).parent().parent().parent().find('.modifyRecipeID').val();

    $.ajax({
            type: 'DELETE',
            url: '/goals/' + modifyRecipeID,
            dataType: 'json',
            contentType: 'application/json'
        })

        .done(function (result) {
            displayRecipes(loginUserId);
            alert('recipe has been deleted');
            $(".introScreen").hide();
            $(".quickView").hide();
            $(".loginScreen").hide();
            $(".registerScreen").hide();
            $(".homeScreen").show();
            $(".homeScreenBudget").hide();
            $(".homeScreenGoals").hide();
            $(".editHomeScreenBudget").hide();
            $(".editHomeScreenGoals").hide();
        })

        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

//delete budget
$(document).on("click", ".jsDeleteBudgetButton", function (event) {
    event.preventDefault();
    let modifyRecipeID = $(this).parent().parent().parent().find('.modifyRecipeID').val();

    $.ajax({
            type: 'DELETE',
            url: '/budgets/' + modifyRecipeID,
            dataType: 'json',
            contentType: 'application/json'
        })

        .done(function (result) {
            displayRecipes(loginUserId);
            alert('recipe has been deleted');
            $(".introScreen").hide();
            $(".quickView").hide();
            $(".loginScreen").hide();
            $(".registerScreen").hide();
            $(".homeScreen").show();
            $(".homeScreenBudget").hide();
            $(".homeScreenGoals").hide();
            $(".editHomeScreenBudget").hide();
            $(".editHomeScreenGoals").hide();
        })

        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});



//$(document).on("click", ".jsSuccessButton", function (event) {
//    event.preventDefault();
//    //get input from the user//
//    let title = $(this).parent().find('.addBRecipeFromAPIName').val();
//    let ingredients = $(this).parent().find('.addBRecipeFromAPIIngredients').val();
//    let image = $(this).parent().find('.addBRecipeFromAPIImage').val();
//    let directions = "";
//    let notes = "";
//    let userIdHidden = loginUserId;
//
//    //if input is valid; add recipe to library//
//    const newRecipeObject = {
//        title: title,
//        ingredients: ingredients,
//        image: image,
//        directions: directions,
//        notes: notes,
//        userId: userIdHidden
//    };
//    // create ajax call to add recipe to library//
//    $.ajax({
//            type: 'POST',
//            url: '/recipes/create',
//            dataType: 'json',
//            data: JSON.stringify(newRecipeObject),
//            contentType: 'application/json'
//        })
//        //if add is successful
//        .done(function (result) {
//            displayBudgets(userIdHidden);
//        })
//        //if add fails
//        .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//        });
//
//});
//
//$(document).on("click", ".jsSelectMonth", function (event) {
//    event.preventDefault();
//    $(".introScreen").hide();
//    $(".quickView").show();
//    $(".loginScreen").hide();
//    $(".registerScreen").hide();
//    $(".homeScreen").hide();
//    $(".homeScreenBudget").hide();
//    $(".homeScreenGoals").hide();
//});

//
//$(document).on("click", "#saveBudgetForm", function (event) {
//    event.preventDefault();
//    let createBudgetID = $(this).parent().parent().parent().find('.createBudgetID').val();
//
//    let createBudgetDescription = $(this).parent().parent().parent().find('.createBudgetDescription').val();
//    let createBudgetDate = $(this).parent().parent().parent().find('.createBudgetDate').val();
//    let createBudgetBudgeted = $(this).parent().parent().parent().find('.createBudgetBudgeted').val();
//    let createBudgetActual = $(this).parent().parent().parent().find('.createBudgetActual').val();
//    let createBudgetType = $(this).parent().parent().parent().find('.createBudgetType').val();
//
//    const createBudgetObject = {
//        description: createBudgetDescription,
//        date: createBudgetDate,
//        budgeted: createBudgetBudgeted,
//        actual: createBudgetActual,
//        type: createBudgetType
//    };
//    // create ajax call to save the recipe//
//    $.ajax({
//            type: 'PUT',
//            url: '/recipes/' + createBudgetID,
//            dataType: 'json',
//            data: JSON.stringify(createBudgetObject),
//            contentType: 'application/json'
//        })
//        //if save is successful
//        .done(function (result) {
//            displayBudgets(loginUserId);
//            alert('Transaction has been saved');
//            $(".introScreen").show();
//            $(".quickView").hide();
//            $(".loginScreen").hide();
//            $(".registerScreen").hide();
//            $(".homeScreen").show();
//            $(".homeScreenBudget").hide();
//            $(".homeScreenGoals").hide();
//        })
//        //if save fails
//        .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//        });
//});
