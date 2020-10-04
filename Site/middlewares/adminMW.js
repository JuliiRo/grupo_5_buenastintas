function adminMW(req,res,next){
    if(req.session.user.categoría == 'administrador'){
        next()
    }else{
        res.redirect('/')
    }
}

module.exports = adminMW