const User = require('./models/user');
const Goal = require('./models/goal');
const Budget = require('./models/budget');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const unirest = require('unirest');
const events = require('events');
const BasicStrategy = require('passport-http').BasicStrategy;
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.Promise = global.Promise;

// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server = undefined;

function runServer(urlToUse) {
    return new Promise((resolve, reject) => {
        mongoose.connect(urlToUse, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                console.log(`Listening on localhost:${config.PORT}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

// external API call
//var getFromEdamam = function (searchTerm) {
//    var emitter = new events.EventEmitter();
//    unirest.get("https://api.edamam.com/search?q=" + searchTerm + "&app_id=5097ae44&app_key=a080dbf283c1fc79a3f91ba9fc627c1c&from=0&to=30")
//        .header("Accept", "application/json")
//        .end(function (result) {
//            //success scenario
//            if (result.ok) {
//                emitter.emit('end', result.body);
//            }
//            //failure scenario
//            else {
//                emitter.emit('error', result.code);
//            }
//        });
//    return emitter;
//};

// local API endpoints
app.get('/get-recipes-from-edamam/:name', function (req, res) {
    //    external api function call and response
    var searchReq = getFromEdamam(req.params.name);
    //get the data from the first api call
    searchReq.on('end', function (item) {
        res.json(item);
    });
    //error handling
    searchReq.on('error', function (code) {
        res.sendStatus(code);
    });
});


// ---------------USER ENDPOINTS-------------------------------------

// POST -----------------------------------

// creating a new user
app.post('/users/create', (req, res) => {
    //get name,email,password from the body object
    let name = req.body.name;
    let password = req.body.password;
    let userId = req.body._id;
    //exludes spaces from email and passwords
    password = password.trim();
    //generate encryption key
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
        //using encryption key from above, generate an encrypted password
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }
            //using the details above and encrpyed password, send them to mongo schema(user.js)
            User.create({
                name,
                password: hash,
            }, (err, item) => {
                //if theres an error saving user to db
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                //if the user is saved successfully
                if (item) {
                    return res.json(item);
                }
            });
        });
    });
});

// logging in a user
app.post('/users/signin', function (req, res) {
    const name = req.body.name;
    const password = req.body.password;
    const userId = req.body._id;

    User.findOne({
        name: req.body.name,
        userId: this._id
    }, function (err, items) {
        if (err) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }
        if (!items) {
            // bad username
            return res.status(401).json({
                message: "Not found!"
            });
        } else {
            items.validatePassword(req.body.password, function (err, isValid) {
                if (err) {
                    console.log('There was an error validating the password.');
                }
                if (!isValid) {
                    return res.status(401).json({
                        message: "Not found"
                    });
                } else {
                    var logInTime = new Date();
                    return res.json(items);
                }
            });
        };
    });
});

// creating a new budget
app.post('/budget/create', (req, res) => {
    let description = req.body.description;
    let date = req.body.date;
    let budgeted = req.body.budgeted;
    let actual = req.body.actual;
    let type = req.body.type;
    let userId = req.body.userId;

    Budget.create({
        description,
        date,
        budgeted,
        actual,
        type,
        userId
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item) {
            return res.json(item);
        }
    });
});



// creating a new goal
app.post('/goal/create', (req, res) => {
    let description = req.body.description;
    let date = req.body.date;
    let budgeted = req.body.budgeted;
    let actual = req.body.actual;
    let userId = req.body.userId;

    Goal.create({
        description,
        date,
        budgeted,
        actual,
        userId
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item) {
            return res.json(item);
        }
    });
});

// PUT --------------------------------------

// update goal
app.put('/goals/:id', function (req, res) {
    let toUpdate = {};
    let updateableFields = ['description', 'date', 'budgeted', 'actual'];
    updateableFields.forEach(function (field) {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });
    Goal
        .findByIdAndUpdate(req.params.id, {
            $set: toUpdate
        }).exec().then(function (achievement) {
            return res.status(204).end();
        }).catch(function (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});

// update budget
app.put('/budgets/:id', function (req, res) {
    let toUpdate = {};
    let updateableFields = ['description', 'date', 'budgeted', 'actual', 'type'];
    updateableFields.forEach(function (field) {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });
    Budget
        .findByIdAndUpdate(req.params.id, {
            $set: toUpdate
        }).exec().then(function (achievement) {
            return res.status(204).end();
        }).catch(function (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});

// GET ------------------------------------

// get names from db
app.get('/check-registration-name/:firstName', function (req, res) {
    User
        .find({
            name: req.params.firstName
        })
        .then(function (users) {
            res.json({
                users
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

// get budgets from db
app.get('/budgets/:userId', function (req, res) {
    Budget
        .find({
            userId: req.params.userId
        })
        .then(function (budgets) {
            res.json({
                budgets
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

// get goals from db
app.get('/goals/:userId', function (req, res) {
    Goal
        .find({
            userId: req.params.userId
        })
        .then(function (goals) {
            res.json({
                goals
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

//get goal to be updated
app.get('/goals/:userId', function (req, res) {
    Goal
        .find({
            selectedGoal: req.params._id
        })
        .then(function (goal) {
            res.json({
                goal
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});


// DELETE ----------------------------------------

//delete goals from library
app.delete('/goals/:id', function (req, res) {
    Goal.findByIdAndRemove(req.params.id).exec().then(function (achievement) {
        return res.status(204).end();
    }).catch(function (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    });
});

//delete budgets from library
app.delete('/budgets/:id', function (req, res) {
    Budget.findByIdAndRemove(req.params.id).exec().then(function (achievement) {
        return res.status(204).end();
    }).catch(function (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    });
});

// MISC ------------------------------------------

// catch-all endpoint if client makes request to non-existent endpoint
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;
exports.closeServer = closeServer;
