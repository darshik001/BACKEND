const fleshmessage = (req,res,next)=>{
    res.locals.flash = {
        'success':req.flash('success'),
    }
    next()
}



module.exports = fleshmessage;