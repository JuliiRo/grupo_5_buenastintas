function adminMW(req,res,next){
    if (req,session != 'undefined'){
        next()
    }else{
        res.redirect('/')
    }
}

module.exports = loginPassMW