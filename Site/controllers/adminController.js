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
        res.render('admin', { 
            title: 'Agregar | Buenas Tintas' ,
            css: 'admin.css'
        })
    },
    agregarProducto:function(req,res){
        let nuevoID = 1;
        dbProducts.forEach(producto=>{
           if(producto.id > nuevoID){
               nuevoID = producto.id
           }
        })
        let productoNuevo={
            id:nuevoID +1,
            bodega: req.body.bodega.trim(),
            nombre: req.body.nombre.trim(),
            varietal: req.body.varietal.trim(),
            año: Number(req.body.año),
            price:Number(req.body.price),
            discount: Number(req.body.discount),
            category: req.body.category.trim(),
            description: req.body.description.trim(),
            image: (req.files[0])?req.files[0].filename: "undefined.jpg",
        }
        ultimoID=productoNuevo.id
        dbProducts.push(productoNuevo);
        fs.writeFileSync(path.join(__dirname,"..","data","productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')
        res.redirect('/admin/show/'+ ultimoID +'/show')
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
            css: 'vistaProducto.css',
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
                producto.image = (req.files[0])?req.files[0].filename: "undefined.jpg"
            }
        })
        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts),'utf-8');
        res.redirect('/admin/show/'+ idProducto +'/show')
    },
    delete:(req,res)=>{
        let idProducto = req.params.id;
        dbProducts.forEach(producto=>{
            if(producto.id == idProducto){
                var aEliminar = dbProducts.indexOf(producto)
                dbProducts.splice(aEliminar , 1)
            }
        })
        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts),'utf-8');
        res.redirect('/admin')
    }
 
  }