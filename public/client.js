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

//green, red, or yellow font
function colorChooser(num) {
    if (num > 0) {
        num.addClass(positive)
    } else if (num < 0) {
        num.addClass(negative)
    } else {
        num.addClass(middle)
    }
};

//function dateFormater() {
//    var date = new Date();
//    var dd = date.getDate();
//    var mm = date.getMonth() + 1;
//    var yyyy = date.getFullYear();
//
//    if (dd < 10) {
//        dd = '0' + dd
//    }
//
//    if (mm < 10) {
//        mm = '0' + mm
//    }
//
//    date = mm + '/' + dd + '/' + yyyy;
//    document.write(date);
//
//};

//function dateConverter() {
//    let date = $('#goalDate').val();
//    let formatedDate = date.dateFormater();
//    console.log(formatedDate);
//};


//function dateFormater() {
//    var date = new Date();
//    var dd = date.getDate();
//    var mm = date.getMonth() + 1;
//    var yyyy = date.getFullYear();
//
//    if (dd < 10) {
//        dd = '0' + dd
//    }
//
//    if (mm < 10) {
//        mm = '0' + mm
//    }
//
//    date = mm + '/' + dd + '/' + yyyy;
//    console.log(date)
//
//};


//function dateConverter() {
//    let date = $('#goalDate').val();
//    //        let formatedDate = date.dateFormater();
//    //        console.log(formatedDate);
//
//    let dd = date.getDate();
//    let mm = date.getMonth() + 1;
//    let yyyy = date.getFullYear();
//
//    if (dd < 10) {
//        dd = '0' + dd
//    }
//
//    if (mm < 10) {
//        mm = '0' + mm
//    }
//
//    date = mm + '/' + dd + '/' + yyyy;
//    console.log(date)
//};
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

//$.each(result.goals.actual function (dataKey, dataValue) {
//    console.log(dataValue);
////    buildTheHtmlOutput += buildTheHtmlOutput += '<div class="cellTrans" id="goalActualTotal" value="">' +  + '</div>';
//});

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
        console.log(dataKey);
        buildTheHtmlOutput += '<div class="row">';

        buildTheHtmlOutput += '<div class="cellTrans"><i class="fas fa-thumbs-down typeIcon negative"></i>' + dataValue.description + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans">' + dataValue.date + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans">$' + dataValue.budgeted + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans">$' + dataValue.actual + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans negative ">$' + (dataValue.actual - dataValue.budgeted) + '</div>';

        buildTheHtmlOutput += '<div class="cellTrans">';
        buildTheHtmlOutput += '<a class="jsCopyGoalButton" href=""><i class="fas fa-copy tableIcons"></i></a>';
        buildTheHtmlOutput += '<a class="jsEditGoalButton" href=""><i class="fas fa-pen-square tableIcons"></i></a>';
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
        console.log(dataKey);
        buildTheHtmlOutput += '<div class="row">';

        buildTheHtmlOutput += '<div class="cellTrans"><i class="fas fa-level-up-alt typeIcon positive"></i>' + dataValue.description + '</div>';

        buildTheHtmlOutput += '<div class="cellTrans">' + dataValue.date + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans">' + dataValue.budgeted + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans">' + dataValue.actual + '</div>';
        buildTheHtmlOutput += '<div class="cellTrans negative">' + (dataValue.actual - dataValue.budgeted) + '</div>';

        buildTheHtmlOutput += '<div class="cellTrans">';
        buildTheHtmlOutput += '<a class="jsCopyGoalButton" href=""><i class="fas fa-copy tableIcons"></i></a>';
        buildTheHtmlOutput += '<a class="jsEditGoalButton" href=""><i class="fas fa-pen-square tableIcons"></i></a>';
        buildTheHtmlOutput += '<a class="jsDeleteGoalButton" href=""><i class="fas fa-trash-alt tableIcons"></i></a>';
        buildTheHtmlOutput += '</div>';

        buildTheHtmlOutput += '</div>';

    })
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
});

//nav item
$(document).on("click", ".jsGoalNav", function (event) {
    event.preventDefault();
    $(".introScreen").show();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").show();
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
});

//edit goal icon button
$(document).on("click", ".jsEditGoalButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").hide();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").show();
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
            })
            //if recipe creation fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
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
//$(document).on("click", ".logoHolder", function (event) {
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
//$(document).on("click", "#failButton", function (event) {
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
//$(document).on("click", ".searchRecipeResultOption", function (event) {
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
