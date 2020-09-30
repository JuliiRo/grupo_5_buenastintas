
const path = require('path');
const fs = require('fs');

const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const bcrypt = require('bcrypt');

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
            css: 'users.css'
        })
    },
    agregarRegister: (req,res)=>{
        let idNuevo = 1;
        dbUsers.forEach(users=>{
           if(users.id > idNuevo){
               idNuevo = users.id
           }
        })
        let nuevoUsers={
            id: idNuevo + 1,
            categoría:'usuario',
            nombreCompleto: req.body.nombreCompleto.trim(),
            correo:req.body.correo.trim(),
            nacimiento: req.body.nacimiento,
            image:(req.files[0])?req.files[0].filename:"foto-undefined.png",
            telefono:Number(req.body.telefono),
            contraseña:bcrypt.hashSync(req.body.contraseña,10),
        }
        dbUsers.push(nuevoUsers);
        fs.writeFileSync(path.join(__dirname,"..","data","usersDataBase.json"),JSON.stringify(dbUsers),'utf-8')
        res.redirect('/users')
    }
}
