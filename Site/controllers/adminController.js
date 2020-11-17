//guardo la base de datos en "db", para empezar a manipularlo.
const db = require ('../database/models');
//variables para usar las funciones de comparacion en la base de datos
const { Sequelize } = require('../database/models');
const Op = Sequelize.Op;
const { validationResult } = require('express-validator');

const fs = require('fs')
const path = require('path');
const dbProducts = require('../data/dbProducts')


module.exports = {
    listar: function(req,res){
        console.log("**************************")
     db.Productos.findAll({
         include :[
             {
                 association : 'categoria'
             }
         ]
     })
      .then(productos =>{
        res.render('show', {
            title: 'Administrador | Buenas Tintas',
            css: 'show.css',
            productos:productos,
        })
      })
    },
    agregar: function(req, res) {
        db.Categoria.findAll({
            order:[
                ['name', 'ASC']
            ]
        })
        .then(categorias => {
            res.render('admin', {
                title: "Agregar",
                css:'admin.css',
                categorias: categorias
            }) 
        })
},
    agregarProducto:function(req,res){
      let errors = validationResult(req);
           if(errors.isEmpty()){
            db.Productos.create({
 
            bodega: req.body.bodega,
            nombre: req.body.nombre,
            varietal: req.body.varietal,
            año: Number(req.body.año),
            precio:Number(req.body.precio),
            discount: Number(req.body.descuento),
            categoria: req.body.categoria,
            description: req.body.descripcion,
            image: (req.files[0])?req.files[0].filename: "undefined.jpg",
      })
      .then(()=>{
        return res.redirect('admin/show')
    })
    }
     }, 
    show:function(req,res){
        let idProducto = req.params.id;
        let flap = req.params.flap;
        let activeDetail;
        let activeEdit;
        let showDetail;
        let showEdit;

        if(flap=="show"){
            activeDetail = 'active';
            showDetail = 'show';
        }else{
            activeEdit = 'active';
            showEdit = 'show';
        }
        let producto = db.Producto.findOne({
            where : {
                id : idProducto
            },
            include : [
                {
                    association :'Categoria'
                }
            ]
        })
       // creo una variable para guardar los productos, para luego recorrerlos//
       let cantidad = db.Productos. count();
       //datos de idcategorias//
       let idcategorias = db.Categoria.findAll()
       //promesa//
       Promise.all([ producto ,idcategorias,cantidad ])
       .then(([ producto,idcategorias,cantidad]) =>{
        res.render('vistaProducto',{
            title: 'Ver / Editar | BT',
            css: 'vistaProducto.css',
            total:cantidad,
          idcategorias : idcategorias,
            activeDetail: activeDetail,
            activeEdit:activeEdit,
            showDetail: showDetail,
            showEdit:showEdit,
       })
       
        })
    },
    detalle:function(req,res){
        //busco en la base de datos el id del producto seleccionado.
        db.Productos.findByPk(req.params.id)
            .then(producto =>{
                res.render("detalleProducto",{
                    title: "Detalle del producto",
                    css: "admin.css",
                    producto: producto
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
   // editamos producto//
   editar:function(req,res){
    //actualizo con funcion update//
    db.Productos.update({
        bodega: req.body.bodega,
        nombre: req.body.nombre,
        varietal: req.body.varietal,
        año: Number(req.body.año),
        precio:Number(req.body.precio),
        descuento: Number(req.body.descuento),
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        image: (req.files[0])?req.files[0].filename: "undefined.jpg",
      
    },
    {
        //DEPENDE DE LA ID SELECCIONADA, SE EDITAR CADA PRODUCTO.
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            //REDIRECCIONO A LA LISTA DE PRODUCTOS.
            res.redirect('/admin/detalle/'+req.params.id)
        })
},
eliminar:function(req,res){
    //funcion destroy para eliminar producto
    db.Productos.destroy({
        where:{
            id: req.params.id
        }
    })
        .then(result=>{
            res.render('/admin')
        })
}
 
  }