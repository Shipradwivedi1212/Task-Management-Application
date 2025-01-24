const express= require('express');
const router = express.Router();
router.route('/tasks/:id').get((req,res)=>{
    res.render('tasklist');
});
router.route('/newtasks/:id').get((req,res)=>{
    res.render('newtask');
});
module.exports = router;