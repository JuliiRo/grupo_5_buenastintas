const adminController = require("./adminController")

module.exports = {
     // http://localhost:3000/users/
    login:function(req,res){
        res.render('users', { 
            title: 'Login | Buenas Tintas',
            css: 'users.css'
        })
    },
    // http://localhost:3000/users/register
    register:function(req,res){
        res.render('register', { 
            title: 'Registro | Buenas Tintas',
            css: 'register.css'
        })
    }
}
