module.exports = {
     // http://localhost:3000/users/
    login:function(req,res){
        res.render('index', { title: 'BT-Login' })
    },
    // http://localhost:3000/users/register
    register:function(req,res){
        res.render('register', { title: 'BT-Registro' })
    }
}
