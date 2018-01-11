const router = require('express').Router();

const authCheck = (req, res, next)=>{
  if(!req.user){
    //if user not logged in
    res.redirect('/auth/login')
  }
  else{
    //if logged in
    next();
  }

}


router.get('/',authCheck,(req, res)=>{
//  res.send('you are logged in'+req.user.accessToken);
res.render('profile',{meUser: req.user})
});

module.exports = router ;
