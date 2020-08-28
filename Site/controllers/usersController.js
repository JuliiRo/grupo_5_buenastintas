module.exports = {
    login:function(req,res){
        res.render('index', { title: 'BT-Login' })
    },
    register:function(req,res){
        res.render('register', { title: 'BT-Registro' })
    }
}
