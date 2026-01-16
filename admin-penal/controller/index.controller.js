exports.deshboard = (req,res)=>{
    // res.cookie('hello', 12345);
    // console.log(req.cookies.user)
    if(req.cookies && req.cookies.user && req.cookies.user._id){
        res.render('deshboard')
    }else{
        res.redirect('/user/login')
    }
}