const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20');
const ForceDotComStrategy = require('passport-forcedotcom').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');
passport.serializeUser((User,done)=>{
//  console.log(accessToken);
done(null, User);
});

passport.deserializeUser((User,done)=>{
  //console.log(accessToken);
done(null, User);
});


passport.use(new ForceDotComStrategy({
  //options for GoogleStrategy
  //callbackURL:'/auth/google/redirect',
//  clientID: keys.googles.clientID,
//  clientSecret: keys.googles.clientSecret
  clientID: '3MVG9g9rbsTkKnAVQW9AEgEaiLk1VHnVVsB41aYVXLWJXDsHxdYE10iTYUXPi2KkXHqjn0rVJIFX060tKp8mt',
 clientSecret: '1105226418100175840',
 callbackURL: '/auth/sf/redirect',
 authorizationURL: 'https://cebciamtest-developer-edition.na73.force.com/services/oauth2/authorize',
 tokenURL: 'https://cebciamtest-developer-edition.na73.force.com/services/oauth2/token'





}, (data, refreshToken, profile, params, done)=>{
//console.log(params._raw.user_id);

console.log( profile.displayName)
var User={
//  accessToken :profile.access_token,
//  refreshToken :refreshToken,
//  name  : profile.displayName
userid:'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
}


done(null,User);

    //passport call back function
//console.log(profile);
//new User({
// username : profile.displayName,
//}).save().then((newUser)=>{

//  console.log("New User Created" + profile.id);
//});



}))
