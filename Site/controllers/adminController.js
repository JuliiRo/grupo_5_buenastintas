const fs = require('fs')
const path = require('path');
const dbProducts = require('../data/dbProducts')


module.exports = {
    show: function(req,res){
        let db = dbProducts
        res.render('show', {
            title: 'Administrador | Buenas Tintas',
            css: 'show.css',
            db:db,
        })
    },
    agregar:function(req,res){
       // http://localhost:3000/admin
        res.render('admin', { 
            title: 'agregar | Buenas Tintas' ,
            css: 'admin.css'
        })
    },
    showEdit:function(req,res){
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
        let resultado = dbProducts.filter(producto =>{
            return producto.id == idProducto
        })
        res.render('vistaProducto',{
            title: 'Ver / Editar | BT',
            css: 'tienda.css',
            total: dbProducts.lenght,
            producto:resultado[0],
            activeDetail: activeDetail,
            activeEdit:activeEdit,
            showDetail: showDetail,
            showEdit:showEdit,
        })
    },
    editar: function(req,res){
        let idProducto = req.params.id;
        dbProducts.forEach(producto => {
            if(producto.id == idProducto){
                producto.id = Number(req.body.id),
                producto.bodega = req.body.bodega,
                producto.nombre = req.body.nombre,
                producto.varietal = req.body.varietal,
                producto.año = req.body.año,
                producto.price = Number(req.body.price),
                producto.discount = Number(req.body.discount),
                producto.category = req.body.category,
                producto.description = req.body.description,
                producto.image = producto.image
            }
        })
        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts),'utf-8');
        res.redirect('/admin/show/'+ idProducto +'/show')
    },
    eliminar: function(req,res){
    }
}