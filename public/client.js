function titleCase(str) {
    return str.split(' ').map(function(val){
        return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    }).join(' ');
}



//define objects variables functions
let loginUserName = "";
let loginUserId = "";

function displayBudgets(userId) {
    $.ajax({
        type: "GET",
        url: '/budgets/' + userId,
        dataType: 'json',
    })
        .done(function (dataOutput) {
        //displays the external api json object in the console
        displayRecipeResult(dataOutput.recipes);
        displayRecipeDetailsResult(dataOutput.recipes);
    })
        .fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

function displayRecipeFromEdamam(dataFromApi) {
    var buildTheHtmlOutput = "";
    console.log(dataFromApi);
    if (dataFromApi.hits.length == 0) {
        buildTheHtmlOutput += 'no results found';
    } else {
        $.each(dataFromApi.hits, function (dataKey, dataValue) {
            buildTheHtmlOutput += '<li class="searchRecipeResultOption">';
            buildTheHtmlOutput += '<div class="object">';
            buildTheHtmlOutput += '<a class="searchRecipeResultsLink" href="#">';
            buildTheHtmlOutput += '<span class="searchRecipeImgContainer">';
            buildTheHtmlOutput += '<img class="searchRecipeImg" src="' + dataValue.recipe.image + '" alt="pastarecipeLink">';
            buildTheHtmlOutput += '</span>';
            buildTheHtmlOutput += '</a>';
            buildTheHtmlOutput += '</div>';

            buildTheHtmlOutput += '<h3 class="resultsTitle">' + dataValue.recipe.label + '</h3>';

            buildTheHtmlOutput += '<div class="data">';
            buildTheHtmlOutput += '<a class="cal" href="#">';
            buildTheHtmlOutput += '<span class="num">' + dataValue.recipe.calories.toFixed(2) + '</span><br />';
            buildTheHtmlOutput += '<span class="info"> calories</span>';
            buildTheHtmlOutput += '</a>';
            buildTheHtmlOutput += '<a class="ing" href="#">';
            buildTheHtmlOutput += '<span class="num">' + dataValue.recipe.ingredients.length + '</span><br />';
            buildTheHtmlOutput += '<span class="info"> ingredients</span>';
            buildTheHtmlOutput += '</a>';
            buildTheHtmlOutput += '</div>';

            buildTheHtmlOutput += '<form class="addBRecipeFromAPI">';
            buildTheHtmlOutput += '<div class="addButton">';
            buildTheHtmlOutput += '<input type="hidden" class="addBRecipeFromAPIName" value="' + dataValue.recipe.label + '">';
            buildTheHtmlOutput += '<input type="hidden" class="addBRecipeFromAPIIngredients" value="' + dataValue.recipe.ingredientLines.toString() + '">';
            buildTheHtmlOutput += '<input type="hidden" class="addBRecipeFromAPIImage" value="' + dataValue.recipe.image + '">';
            buildTheHtmlOutput += '<button type="submit" class="addSuccessButton green jsSuccessButton">Add</button>';
            buildTheHtmlOutput += '</div>';
            buildTheHtmlOutput += '</form>';
            buildTheHtmlOutput += '</li>';
        })
    }
    $(".resultsList").html(buildTheHtmlOutput);
};

function displayRecipeResult(dataOutput) {
    var buildTheHtmlOutput = "";
    $.each(dataOutput, function (dataKey, dataValue) {
        buildTheHtmlOutput += '<a class="recipeLink" href="#">';
        buildTheHtmlOutput += '<div class="recipeImgContainer">';
        buildTheHtmlOutput += '<img class="recipeImg" src="' + dataValue.image + '" alt="' + dataValue.title + '">';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<h2 class="recipeTitle">' + dataValue.title + '</h2>';
        buildTheHtmlOutput += '</a>';
    })
    $(".recipeSnippetContainer").html(buildTheHtmlOutput);
};

function displayRecipeDetailsResult(dataFromApi) {
    var buildTheHtmlOutput = "";
    $.each(dataFromApi, function (dataKey, dataValue) {
        buildTheHtmlOutput += '<ul class="recipeInsideContainer" id="">';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<img class="recipeImg" src="' + dataValue.image + '" alt="' + dataValue.title + '">';
        buildTheHtmlOutput += '</li>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<h2 class="chosenTitle">' + dataValue.title + '</h2>';
        buildTheHtmlOutput += '</li >';

        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<div class="createSections">';
        buildTheHtmlOutput += '<label class="createLabel" for="ingredients">Ingredients:</label>';
        buildTheHtmlOutput += '<textarea class="createInput modifyRecipeIngredients" type="text" name="ingredients" required>' + dataValue.ingredients + '</textarea>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += ' <div class="createSections">';
        buildTheHtmlOutput += '<label class="createLabel" for="directions">Directions:</label>';
        buildTheHtmlOutput += '<textarea class="createInput modifyRecipeDirections" type="text" name="directions" >' + dataValue.directions + '</textarea>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<div class="createSections">';
        buildTheHtmlOutput += '<label class="createLabel" for="notes">Notes:</label>';
        buildTheHtmlOutput += '<textarea class="createInput modifyRecipeNotes" type="text" name="notes" >' + dataValue.notes + '</textarea>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li>';

        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<div class="recipeButtonContainer">';
        buildTheHtmlOutput += '<input type="hidden" class="modifyRecipeID" value="' + dataValue._id + '">';
        buildTheHtmlOutput += '<button type="button" class="recipeButton green saveAnchor" >Save</button>';
        buildTheHtmlOutput += '<button type="button" class="recipeButton red deleteAnchor">Delete</button>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li>';
        buildTheHtmlOutput += '</ul>';
    })
    $(".recipeOutsideContainer").html(buildTheHtmlOutput);
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
    //validate the input//
    if (name.length == 0) {
        alert('Please add name!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else {
        //if input is valid; sign in the user//
        const loginUserObject = {
            name: name,
            password: password
        };
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
            $(".resultTitle span").text(titleCase(result.name) + "'s ");
            $(".loginUserId").val(loginUserId);
            $(".loginUserName").val(loginUserName);
            console.log(loginUserId);
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

$(document).on("click", ".jsSubmitRegisterButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let name = $('#registerName').val();
    let password = $('#registerPassword').val();
    let confirmPassword = $('#registerConfirmPassword').val();
    let userId =  $(".loginUserId").val();
//    console.log(userId);




    //validate the input//
    if (name.length == 0) {
        alert('Please add name!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else if (password !== confirmPassword) {
        alert('Passwords must match!');
    } else {
        //if input is valid; register the user//
        const newUserObject = {
            name: name,
            password: password
//            userId: userId
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
            $(".loginUserId").val(getUserId(loginUserId));
            console.log(userId);
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

//$(document).on("submit", ".searchBarContainer", function (event) {
//    event.preventDefault();
//    let searchBarInput = $(this).parent().find('.recipeSearchInput').val();
//    //validate the input//
//    if (searchBarInput.length == 0) {
//        alert('Please search for a recipe!');
//    } else {
//        $.ajax({
//            type: "GET",
//            url: '/get-recipes-from-edamam/' + searchBarInput,
//            dataType: 'json',
//        })
//            .done(function (dataOutput) {
//            displayRecipeFromEdamam(dataOutput);
//            $(".introScreen").hide();
//            $(".quickView").show();
//            $(".loginScreen").hide();
//            $(".registerScreen").hide();
//            $(".homeScreen").hide();
//            $(".homeScreenBudget").hide();
//            $(".homeScreenGoals").hide();
//        })
//            .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//            $(".introScreen").hide();
//            $(".quickView").show();
//            $(".loginScreen").hide();
//            $(".registerScreen").hide();
//            $(".homeScreen").hide();
//            $(".homeScreenBudget").hide();
//            $(".homeScreenGoals").hide();
//        });
//    }
//});
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
//        type: 'PUT',
//        url: '/recipes/' + createBudgetID,
//        dataType: 'json',
//        data: JSON.stringify(createBudgetObject),
//        contentType: 'application/json'
//    })
//    //if save is successful
//        .done(function (result) {
//        displayBudgets(loginUserId);
//        alert('Transaction has been saved');
//        $(".introScreen").show();
//        $(".quickView").hide();
//        $(".loginScreen").hide();
//        $(".registerScreen").hide();
//        $(".homeScreen").show();
//        $(".homeScreenBudget").hide();
//        $(".homeScreenGoals").hide();
//    })
//    //if save fails
//        .fail(function (jqXHR, error, errorThrown) {
//        console.log(jqXHR);
//        console.log(error);
//        console.log(errorThrown);
//    });
//});

//$(document).on("click", ".deleteAnchor", function (event) {
//    event.preventDefault();
//    let modifyRecipeID = $(this).parent().parent().parent().find('.modifyRecipeID').val();
//
//    $.ajax({
//        type: 'DELETE',
//        url: '/recipes/' + modifyRecipeID,
//        dataType: 'json',
//        contentType: 'application/json'
//    })
//
//        .done(function (result) {
//        displayBudgets(loginUserId);
//        alert('recipe has been deleted');
//        $(".introScreen").hide();
//        $(".quickView").show();
//        $(".loginScreen").hide();
//        $(".registerScreen").hide();
//        $(".homeScreen").hide();
//        $(".homeScreenBudget").hide();
//        $(".homeScreenGoals").hide();
//
//        .fail(function (jqXHR, error, errorThrown) {
//        console.log(jqXHR);
//        console.log(error);
//        console.log(errorThrown);
//    });
//});

$(document).on("click", "#saveBudgetForm", function (event) {
    event.preventDefault();
    //get input from the user//
    let description = $('#budgetDescription').val();
    let date = $('#budgetDate').val();
    let budgeted = $('#budgetBudgeted').val();
    let actual = $('#budgetActual').val();
    let type = $('#budgetType').val();
    let userIdHidden = $('.loggedInUser').val();
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
            url: '/recipes/create',
            dataType: 'json',
            data: JSON.stringify(newBudgetObject),
            contentType: 'application/json'
        })
        //if budget creation is successful
            .done(function (result) {
            displayBudgets(userIdHidden);
            console.log(result);
            $(".introScreen").show();
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


$(document).on("click", ".jsSuccessButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let title = $(this).parent().find('.addBRecipeFromAPIName').val();
    let ingredients = $(this).parent().find('.addBRecipeFromAPIIngredients').val();
    let image = $(this).parent().find('.addBRecipeFromAPIImage').val();
    let directions = "";
    let notes = "";
    let userIdHidden = loginUserId;

    //if input is valid; add recipe to library//
    const newRecipeObject = {
        title: title,
        ingredients: ingredients,
        image: image,
        directions: directions,
        notes: notes,
        userId: userIdHidden
    };
    // create ajax call to add recipe to library//
    $.ajax({
        type: 'POST',
        url: '/recipes/create',
        dataType: 'json',
        data: JSON.stringify(newRecipeObject),
        contentType: 'application/json'
    })
    //if add is successful
        .done(function (result) {
        displayBudgets(userIdHidden);
    })
    //if add fails
        .fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });

});

$(document).on("click", ".jsSelectMonth", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").show();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
});

$(document).on("click", ".logoHolder", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").show();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
});

$(document).on("click", "#failButton", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").show();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
});

$(document).on("click", ".searchRecipeResultOption", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".quickView").show();
    $(".loginScreen").hide();
    $(".registerScreen").hide();
    $(".homeScreen").hide();
    $(".homeScreenBudget").hide();
    $(".homeScreenGoals").hide();
});
