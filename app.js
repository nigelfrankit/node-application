const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport  = require('passport');
const profileRoutes = require('./routes/profile-routes');
//const sql = require('mssql');
/*
const config = {
    user: 'WebApp',
    password: 'WebApp4',
    server: 'cebdbtest03\\ss2005std', // You can use 'localhost\\instance' to connect to named instance
    database: 'CEB_Logins',

    options: {
      //  encrypt: true // Use this if you're on Windows Azure
    }
};

sql.connect(config).then(pool => {
    // Query

    return pool.request()
//    .input('input_parameter', sql.Int, value)
    .query('select * from AutoEmail')
}).then(result => {
    console.dir(result)

    // Stored procedure

  //  return pool.request()
  //  .input('input_parameter', sql.Int, value)
  //  .output('output_parameter', sql.VarChar(50))
  //  .execute('procedure_name')
})//.then(result => {
  //  console.dir(result)
//}).catch(err => {
    // ... error checks
//})

sql.on('error', err => {
    // ... error handler
})


*/







//express init
const app = express();

// set view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge:24 * 60 * 60 * 1000,
  keys:['keys.session.cookieKey']
}));

//iniit passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
//mongoose.Promise = global.Promise;
//mongoose.connect(keys.mongodb.dbURI, ()=>{
  //console.log("connected to mongodbb");
//});


//setup authRoutes middleware
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);





// create home route
app.get('/', (req, res) => {
      res.render('home');
});



app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
