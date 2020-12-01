const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const db = require('../database/models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    //http://localhost:3000/tienda
    tienda:function(req,res){
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
        .then( Productos => {
        res.render('tienda', { 
            title: 'Tienda | Buenas tintas',
            css: 'tienda.css',
            Productos:Productos
        })
    })
    },
    //http://localhost:3000/tienda/carrito
    carrito:function(req,res){
        res.render('carrito', { 
            title: 'Carrito | Buenas tintas',
            css: 'carrito.css',
        })
    },
    search:function(req,res){
        db.Productos.findAll({
            where : {
                bodega : {
                    [Op.substring] : req.body.search
                },
            },
            
            // where : {
            //     nombre : {
            //         [Op.substring] : req.body.search
            //     }
            // },
            // where : {
            //     varietal : {
            //         [Op.substring] : req.body.search
            //     },
            // },
            // where : {
            //     idCategoria : {
            //         [Op.substring] : req.body.search
            //     },
            // }
        })
        .then(productos => {
            res.render('tienda',{
                title: 'Buscador | Buenas tintas',
                css: 'tienda.css',
                Productos:productos
            })
        })

    },
    categoria: function(req,res){
        db.Productos.findAll({
            where : {
                    id_categoria : req.params.id
                }
        })
        .then(productos => {
            res.render('tienda',{
                title: 'Categoria | Buenas tintas',
                css: 'tienda.css',
                Productos:productos
            })
        })

    },
        //http://localhost:3000/tienda/detalle
    detalle:function(req,res){
        db.Productos.findOne({
            where: {
                id:req.params.id
            },
            include : [
                {
                    association :'categoria'
                }
            
            ]
        })
        .then(productos =>{
        res.render('detalleProducto', {
            title: 'Detalle de Producto | Buenas tintas',
            css: 'detalleProducto.css',
            productos:productos,
        })
    })
    }
    
}