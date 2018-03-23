//define objects variables functions
let loginUserEmail = "";
let loginUserId = "";

function displayRecipes(userId) {
    $.ajax({
            type: "GET",
            url: '/recipes/' + userId,
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

//function displayRecipeFromEdamam(dataFromApi) {
//    var buildTheHtmlOutput = "";
//    console.log(dataFromApi);
//    if (dataFromApi.hits.length == 0) {
//        buildTheHtmlOutput += 'no results found';
//    } else {
//        $.each(dataFromApi.hits, function (dataKey, dataValue) {
//            buildTheHtmlOutput += '<li class="searchRecipeResultOption">';
//            buildTheHtmlOutput += '<div class="object">';
//            buildTheHtmlOutput += '<a class="searchRecipeResultsLink" href="#">';
//            buildTheHtmlOutput += '<span class="searchRecipeImgContainer">';
//            buildTheHtmlOutput += '<img class="searchRecipeImg" src="' + dataValue.recipe.image + '" alt="pastarecipeLink">';
//            buildTheHtmlOutput += '</span>';
//            buildTheHtmlOutput += '</a>';
//            buildTheHtmlOutput += '</div>';
//
//            buildTheHtmlOutput += '<h3 class="resultsTitle">' + dataValue.recipe.label + '</h3>';
//
//            buildTheHtmlOutput += '<div class="data">';
//            buildTheHtmlOutput += '<a class="cal" href="#">';
//            buildTheHtmlOutput += '<span class="num">' + dataValue.recipe.calories.toFixed(2) + '</span><br />';
//            buildTheHtmlOutput += '<span class="info"> calories</span>';
//            buildTheHtmlOutput += '</a>';
//            buildTheHtmlOutput += '<a class="ing" href="#">';
//            buildTheHtmlOutput += '<span class="num">' + dataValue.recipe.ingredients.length + '</span><br />';
//            buildTheHtmlOutput += '<span class="info"> ingredients</span>';
//            buildTheHtmlOutput += '</a>';
//            buildTheHtmlOutput += '</div>';
//
//            buildTheHtmlOutput += '<form class="addBRecipeFromAPI">';
//            buildTheHtmlOutput += '<div class="addButton">';
//            buildTheHtmlOutput += '<input type="hidden" class="addBRecipeFromAPIName" value="' + dataValue.recipe.label + '">';
//            buildTheHtmlOutput += '<input type="hidden" class="addBRecipeFromAPIIngredients" value="' + dataValue.recipe.ingredientLines.toString() + '">';
//            buildTheHtmlOutput += '<input type="hidden" class="addBRecipeFromAPIImage" value="' + dataValue.recipe.image + '">';
//            buildTheHtmlOutput += '<button type="submit" class="addSuccessButton green jsSuccessButton">Add</button>';
//            buildTheHtmlOutput += '</div>';
//            buildTheHtmlOutput += '</form>';
//            buildTheHtmlOutput += '</li>';
//        })
//    }
//    $(".resultsList").html(buildTheHtmlOutput);
//};

//function displayRecipeResult(dataOutput) {
//    var buildTheHtmlOutput = "";
//    $.each(dataOutput, function (dataKey, dataValue) {
//        buildTheHtmlOutput += '<a class="recipeLink" href="#">';
//        buildTheHtmlOutput += '<div class="recipeImgContainer">';
//        buildTheHtmlOutput += '<img class="recipeImg" src="' + dataValue.image + '" alt="' + dataValue.title + '">';
//        buildTheHtmlOutput += '</div>';
//        buildTheHtmlOutput += '<h2 class="recipeTitle">' + dataValue.title + '</h2>';
//        buildTheHtmlOutput += '</a>';
//    })
//    $(".recipeSnippetContainer").html(buildTheHtmlOutput);
//};

//function displayRecipeDetailsResult(dataFromApi) {
//    var buildTheHtmlOutput = "";
//    $.each(dataFromApi, function (dataKey, dataValue) {
//        buildTheHtmlOutput += '<ul class="recipeInsideContainer" id="">';
//        buildTheHtmlOutput += '<li>';
//        buildTheHtmlOutput += '<img class="recipeImg" src="' + dataValue.image + '" alt="' + dataValue.title + '">';
//        buildTheHtmlOutput += '</li>';
//        buildTheHtmlOutput += '<li>';
//        buildTheHtmlOutput += '<h2 class="chosenTitle">' + dataValue.title + '</h2>';
//        buildTheHtmlOutput += '</li >';
//
//        buildTheHtmlOutput += '<li>';
//        buildTheHtmlOutput += '<div class="createSections">';
//        buildTheHtmlOutput += '<label class="createLabel" for="ingredients">Ingredients:</label>';
//        buildTheHtmlOutput += '<textarea class="createInput modifyRecipeIngredients" type="text" name="ingredients" required>' + dataValue.ingredients + '</textarea>';
//        buildTheHtmlOutput += '</div>';
//        buildTheHtmlOutput += '</li>';
//        buildTheHtmlOutput += '<li>';
//        buildTheHtmlOutput += ' <div class="createSections">';
//        buildTheHtmlOutput += '<label class="createLabel" for="directions">Directions:</label>';
//        buildTheHtmlOutput += '<textarea class="createInput modifyRecipeDirections" type="text" name="directions" >' + dataValue.directions + '</textarea>';
//        buildTheHtmlOutput += '</div>';
//        buildTheHtmlOutput += '</li>';
//        buildTheHtmlOutput += '<li>';
//        buildTheHtmlOutput += '<div class="createSections">';
//        buildTheHtmlOutput += '<label class="createLabel" for="notes">Notes:</label>';
//        buildTheHtmlOutput += '<textarea class="createInput modifyRecipeNotes" type="text" name="notes" >' + dataValue.notes + '</textarea>';
//        buildTheHtmlOutput += '</div>';
//        buildTheHtmlOutput += '</li>';
//
//        buildTheHtmlOutput += '<li>';
//        buildTheHtmlOutput += '<div class="recipeButtonContainer">';
//        buildTheHtmlOutput += '<input type="hidden" class="modifyRecipeID" value="' + dataValue._id + '">';
//        buildTheHtmlOutput += '<button type="button" class="recipeButton green saveAnchor" >Save</button>';
//        buildTheHtmlOutput += '<button type="button" class="recipeButton red deleteAnchor">Delete</button>';
//        buildTheHtmlOutput += '</div>';
//        buildTheHtmlOutput += '</li>';
//        buildTheHtmlOutput += '</ul>';
//    })
//    $(".recipeOutsideContainer").html(buildTheHtmlOutput);
//};

$(document).ready(function () {
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
});

$(document).on("click", ".", function (event) {
    event.preventDefault();
    $("").hide();
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
});

$(document).on("click", ".jsRegisterButton", function (event) {
    event.preventDefault();

    $("").hide();
    $("").hide();
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
});

$(document).on("click", ".signInButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let email = $('#signInEmail').val();
    let password = $('#signInPassword').val();
    //validate the input//
    if (email.length == 0) {
        alert('Please add email!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else {
        //if input is valid; sign in the user//
        const signInUserObject = {
            email: email,
            password: password
        };
        // create ajax call to sign in the user//
        $.ajax({
                type: 'POST',
                url: '/users/signin',
                dataType: 'json',
                data: JSON.stringify(signInUserObject),
                contentType: 'application/json'
            })
            //if sign in is successful
            .done(function (result) {
                loginUserEmail = result.email;
                loginUserId = result._id;
                displayRecipes(loginUserId);
                $("").val(loginUserId);
                $("").hide();
                $("").hide();
                $("").hide();
                $(".").show();
                $("").hide();
                $("").hide();
                $("").show();
                $("").hide();
            })
            //if sign in fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});

$(document).on("click", ".registerButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let name = $('#registerName').val();
    let email = $('#registerEmail').val();
    let password = $('#registerPassword').val();
    let confirmPassword = $('#registerConfirmPassword').val();
    //validate the input//
    if (name.length == 0) {
        alert('Please add name!');
    } else if (email.length == 0) {
        alert('Please add email!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else if (password !== confirmPassword) {
        alert('Passwords must match!');
    } else {
        //if input is valid; register the user//
        const newUserObject = {
            name: name,
            email: email,
            password: password
        };
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
                alert('Thanks for signing up! You may now sign in with your username and password.');
                $("").hide();
                $("").show();
                $("").hide();
                $("").hide();
                $("").hide();
                $("").hide();
                $("").hide();
            })
            //if registration fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
});

$(document).on("click", ".jsMyLibrary", function (event) {
    event.preventDefault();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
});

//$(document).on("submit", ".searchBarContainer", function (event) {
//    event.preventDefault();
//    let searchBarInput = $(this).parent().find('.recipeSearchInput').val();
//    //validate the input//
//    if (searchBarInput.length == 0) {
//        alert('Please search for a recipe!');
//    } else {
//        $.ajax({
//                type: "GET",
//                url: '/get-recipes-from-edamam/' + searchBarInput,
//                dataType: 'json',
//            })
//            .done(function (dataOutput) {
//                displayRecipeFromEdamam(dataOutput);
//                $(".introScreen").hide();
//                $(".signInScreen").hide();
//                $(".createUsernameScreen").hide();
//                $(".homeScreen").hide();
//                $(".searchScreen").hide();
//                $(".createRecipeScreen").hide();
//                $(".addEdamamScreen").show();
//                $(".successScenario").show();
//            })
//            .fail(function (jqXHR, error, errorThrown) {
//                console.log(jqXHR);
//                console.log(error);
//                console.log(errorThrown);
//                $(".introScreen").hide();
//                $(".signInScreen").hide();
//                $(".createUsernameScreen").hide();
//                $(".homeScreen").hide();
//                $(".searchScreen").hide();
//                $(".chosenFail").show();
//                $(".createRecipeScreen").hide();
//                $(".addEdamamScreen").show();
//            });
//    }
//});

$(document).on("click", "#modifyAnchor", function (event) {
    event.preventDefault();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").show();
    $("").show();
    $("").hide();

});

$(document).on("click", "#directionsAnchor", function (event) {
    event.preventDefault();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
});

$(document).on("click", ".saveAnchor", function (event) {
    event.preventDefault();
    let modifyRecipeID = $(this).parent().parent().parent().find('.modifyRecipeID').val();

    let modifyRecipeIngredients = $(this).parent().parent().parent().find('.modifyRecipeIngredients').val();
    let modifyRecipeDirections = $(this).parent().parent().parent().find('.modifyRecipeDirections').val();
    let modifyRecipeNotes = $(this).parent().parent().parent().find('.modifyRecipeNotes').val();

    const modifyRecipeObject = {
        ingredients: modifyRecipeIngredients,
        directions: modifyRecipeDirections,
        notes: modifyRecipeNotes
    };
    // create ajax call to save the recipe//
    $.ajax({
            type: 'PUT',
            url: '/recipes/' + modifyRecipeID,
            dataType: 'json',
            data: JSON.stringify(modifyRecipeObject),
            contentType: 'application/json'
        })
        //if save is successful
        .done(function (result) {
            displayRecipes(loginUserId);
            alert('recipe has been saved');
            $(".introScreen").hide();
            $(".signInScreen").hide();
            $(".createUsernameScreen").hide();
            $(".homeScreen").show();
            $(".searchScreen").hide();
            $(".createRecipeScreen").hide();
            $(".ingredientsContainer").hide();
            $(".modsList").hide();
            $(".addEdamamScreen").hide();
        })
        //if save fails
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

$(document).on("click", ".deleteAnchor", function (event) {
    event.preventDefault();
    let modifyRecipeID = $(this).parent().parent().parent().find('.modifyRecipeID').val();

    $.ajax({
            type: 'DELETE',
            url: '/recipes/' + modifyRecipeID,
            dataType: 'json',
            contentType: 'application/json'
        })

        .done(function (result) {
            displayRecipes(loginUserId);
            alert('recipe has been deleted');
            $(".introScreen").hide();
            $(".signInScreen").hide();
            $(".createUsernameScreen").hide();
            $(".homeScreen").show();
            $(".searchScreen").hide();
            $(".createRecipeScreen").hide();
            $(".ingredientsContainer").hide();
            $(".modsList").hide();
            $(".addEdamamScreen").hide();
        })

        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

$(document).on("click", "#jsCreateSaveButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let title = $('#titleCreate').val();
    let ingredients = $('#ingredientsCreate').val();
    let directions = $('#createDirections').val();
    let notes = $('#notesCreate').val();
    let userIdHidden = $('.loggedInUser').val();
    //validate the input//
    if (title.length == 0) {
        alert('Please add title!');
    } else if (ingredients.length == 0) {
        alert('Please add ingredients!');
    } else if (directions.length == 0) {
        alert('Please add directions!');
    } else {
        //if input is valid; create the new recipe//
        const newRecipeObject = {
            title: title,
            ingredients: ingredients,
            image: "website-images/no-image-available.png",
            directions: directions,
            notes: notes,
            userId: userIdHidden
        };
        // create ajax call to create the new recipe//
        $.ajax({
                type: 'POST',
                url: '/recipes/create',
                dataType: 'json',
                data: JSON.stringify(newRecipeObject),
                contentType: 'application/json'
            })
            //if recipe creation is successful
            .done(function (result) {
                displayRecipes(userIdHidden);
                $(".introScreen").hide();
                $(".signInScreen").hide();
                $(".createUsernameScreen").hide();
                $(".homeScreen").show();
                $(".searchScreen").hide();
                $(".createRecipeScreen").hide();
                $(".addEdamamScreen").hide();
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
            displayRecipes(userIdHidden);
        })
        //if add fails
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

});

$(document).on("click", "#jsCancelSaveButton", function (event) {
    event.preventDefault();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
});

$(document).on("click", ".logoHolder", function (event) {
    event.preventDefault();
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
});

$(document).on("click", "#failButton", function (event) {
    event.preventDefault();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
});

$(document).on("click", ".searchRecipeResultOption", function (event) {
    event.preventDefault();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").show();
    $("").hide();
    $("").hide();
    $("").hide();
});
