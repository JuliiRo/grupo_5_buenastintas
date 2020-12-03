
const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')

module.exports = {
     // http://localhost:3000/users/
    login:function(req,res){
        res.render('users', { 
            title: 'Login | Buenas Tintas',
            css: 'users.css',
            script :'userLogin.js'
        })
    },
    // http://localhost:3000/users/register
    register:function(req,res){
        res.render('register', { 
            title: 'Registro | Buenas Tintas',
            css: 'users.css',
            script : 'registerUser.js'
        })
    },
    processLogin:function(req,res){
        
        let errores = validationResult(req); //guardo los errores que me vienen de expressValidator
        if(errores.isEmpty()){ //si no hay errores

            db.Users.findOne({
                where : {
                    email : req.body.email
                }
            })
            .then( user =>{
                req.session.user = {
                    id:user.id,
                    name: user.name ,
                    last_name : user.last_name,
                    category: user.category,
                    email: user.email,
                    photo: user.photo
                }
                if(req.body.recordar){
                    res.cookie('userBuenasTintas' ,req.session.user,{maxAge:1000*60*60})
                }
                res.redirect('/')
            })
            .catch(err =>{
                res.send(err)
            })
        }else{
            res.render('users',{
                title: 'Login | Buenas Tintas',
                css: 'users.css',
                errores: errores.mapped(),
                old:req.body,
                script : 'registerUser.js'
            })
        }
        
    },
    logout: function(req,res){
        req.session.destroy()
        if(req.cookies.userBuenasTintas){
            res.cookie('userBuenasTintas',' ',{maxAge:-1});
        }
        return res.redirect('/')
    },
    agregarRegister: (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Users.create({
                category: 'cliente',
                name: req.body.name.trim(),
                last_name: req.body.last_name.trim(),
                email: req.body.email.trim(),
                date: req.body.date,
                photo: (req.files[0])?req.files[0].filename:"foto-undefined.png",
                phone: req.body.phone,
                password:bcrypt.hashSync(req.body.password,10),
            })
            .then(usuario => {
                //console.log(usuario)
                return res.redirect('/users/login')
            })
            .catch(err => {
                res.send(err)
            })
        }else{
            res.render('register',{
                title:"Registrate | Buenas Tintas",
                css:"users.css",
                errors:errors.mapped(),
                old:req.body,
                script : 'registerUser.js'
            })
        }
    },
    profile:function(req,res){
        db.Users.findByPk(req.session.user.id)
        .then(user=>{
            res.render('profile',{
                title:'Perfil | Buenas Tintas',
                css:'profile.css',
                user:user
            })
        })
        .catch(err=>{
            res.send(err)
        })
    },
    updateProfile: (req,res)=>{
        db.Users.update({
            phone:req.body.phone,
            date:req.body.date,
            photo:(req.files[0])?req.files[0].filename:req.session.user.photo,
            // address:req.body.address,
            // city:req.body.city,
            // province:req.body.province,
        },{
            where: {
                id: req.params.id
            }
        })
        .then( resul=>{
            console.log(resul)
            return res.redirect('/users/profile')
        })
        .catch(err=>{
            res.send(err)
        })
    },
    delete:(req,res)=>{
        db.Users.destroy({
            where:{
                id : req.params.id
            }
        })
        .then(result => {
            console.log(result)

            req.session.destroy();
            if(req.cookies.userBuenasTintas){
                res.cookie('userBuenasTintas','',{maxAge:-1});
            }
            return res.redirect('/')
        })
        .catch(err=>{
            res.send(err)
        })
    }
}
