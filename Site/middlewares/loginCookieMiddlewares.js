module.exports=function(req ,res ,next){
    if(req.cookies.userBuenasTintas){
        console.log(req.cookies.userBuenasTintas)
        req.session.user = req.cookies.userBuenasTintas;
        res.locals.user = req.session.user
        next()
    }else{
        next()
    }
}