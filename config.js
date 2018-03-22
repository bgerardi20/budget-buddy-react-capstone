exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    (process.env.NODE_ENV === 'production' ?
     'mongodb://admin:user123@ds121589.mlab.com:21589/budget-buddy-react-capstone' :
     'mongodb://admin:user123@ds121589.mlab.com:21589/budget-buddy-react-capstone');
exports.PORT = process.env.PORT || 5001;
