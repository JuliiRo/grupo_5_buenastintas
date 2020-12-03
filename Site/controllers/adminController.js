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
     db.Productos.findAll({
        include : [
            {
                association :'categoria'
            }
        
        ],
        order :[ 
             ['id_categoria', 'ASC']
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
                categorias: categorias,
                script : 'agregarProductos.js' 
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
            cosecha: Number(req.body.cosecha),
            precio:Number(req.body.precio),
            descuento: Number(req.body.descuento),
            idCategoria: req.body.categoria,
            descripcion: req.body.descripcion,
            image: (req.files[0])?req.files[0].filename: "undefined.jpg",
      })
      .then(()=>{
        return res.redirect('/admin')
    })
    .catch(err =>{
        res.send(err)
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
    
        if(flap == "show"){
            activeDetail = "active";
            showDetail = "show";
        }else{
            activeEdit = "active";
            showEdit = "show";
        }
        // //let posicion = productos.filter(producto =>{
        //     return producto.id == idProducto
        // })//
        
    
       let producto = db.Productos.findByPk(idProducto,{
            include: [
                {
                    association : 'categoria'
                }
            ]
        })
    
        let minimo = db.Productos.min('id')
        let maximo = db.Productos.max('id')
    
        let productos = db.Productos.findAll({
            include: [
                {
                    association : 'categoria'
                }
            ]
        })
    
    
        
        Promise.all([ producto, productos, minimo, maximo])
           .then(([ producto, productos, minimo ,maximo]) =>{
            console.log(minimo+" -- "+ producto.id+" -- "+ maximo)
            
    let posicion 
        for (let i = 0; i< productos.length; i ++){
            console.log (i)
            if (productos [i].id==idProducto){
                posicion=i
                break
            }
        }
        res.render('vistaProducto',{
            title: "Ver / Editar Producto",
            css: 'vistaProducto.css',
            posicion: posicion,
            productos: productos,
            producto: producto,
            activeDetail:activeDetail,
            activeEdit:activeEdit,
            showEdit:showEdit,
            showDetail:showDetail,
            minimo: minimo,
            maximo: maximo
        })
        
    
        })
        
    },
    detalle:function(req,res){
        //busco en la base de datos el id del producto seleccionado.
        db.Productos.findByPk(req.params.id)
            .then(productos =>{
                res.render("detalleProducto",{
                    title: "Detalle del producto",
                    css: "admin.css",
                    productos: productos
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
        cosecha: Number(req.body.cosecha),
        precio:Number(req.body.precio),
        descuento: Number(req.body.descuento),
        idCategoria: req.body.categoria,
        descripcion: req.body.descripcion,
        image: (req.files[0])?req.files[0].filename:req.session.user.image,
      
    },
    {
        //DEPENDE DE LA ID SELECCIONADA, SE EDITAR CADA PRODUCTO.
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            //REDIRECCIONO A LA LISTA DE PRODUCTOS.
            res.redirect('/admin')
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
            res.redirect('/admin')
        })
}
 
  }