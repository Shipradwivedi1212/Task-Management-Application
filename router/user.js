const express= require('express');
const router = express.Router();
router.get('/register',(req,res)=>{
    res.render('register');
});
router.post('/register',(req,res)=>{
    
})
router.get('/login',(req,res)=>{
    res.render('login');
});
router.post('/login',(req,res)=>{
    res.render('tasklist');
})
module.exports = router;