function adminMW(req,res,next){
    if(req.session.user && req.session.user.category == 'administrador'){
        next()
    }else{
        res.redirect('/')
    }
}

module.exports = adminMW