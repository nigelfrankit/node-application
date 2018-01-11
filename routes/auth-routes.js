const router = require('express').Router();
const passport = require('passport');
const ForceDotComStrategy = require('passport-forcedotcom').Strategy;

//auth login

router.get('/login',(req,res)=>{
  res.render('login');
})

//auth logout
router.get('/logout',(req,res)=>{
  //handle with passport
  //res.send("loggin out");
  req.logout();
  res.redirect('/');
})
//auth with google
router.get('/sf', passport.authenticate('forcedotcom'));


//callback route for google to redirect to : this time with code
router.get('/sf/redirect',passport.authenticate('forcedotcom'),(req,res)=>{
//var user_id = res.req.user.userid;
//  console.log(res.req.user.userid);
  //res.send(req.user.accessToken);
  res.render('profile',{you : res.req.user.userid});
// res.render('/profile');
})


module.exports = router;
