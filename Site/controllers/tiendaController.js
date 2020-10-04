const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))

module.exports = {
    //http://localhost:3000/tienda
    tienda:function(req,res){
        let db = dbProducts
        res.render('tienda', { 
            title: 'Tienda | Buenas tintas',
            css: 'tienda.css',
            productos:db
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
        let busqueda= req.query.search;
        let productos=[];
        dbProducts.forEach(producto => {
            if(producto.bodega.toLowerCase().includes(busqueda.toLowerCase())){
                productos.push(producto)
            }
        });
        res.render('tienda',{
            title: 'Buscador | Buenas tintas',
            css: 'tienda.css',
            productos:productos
        })
    },
        //http://localhost:3000/tienda/detalle
    detalle:function(req,res){
        idBebida = req.params.id;
        let productos = dbProducts.filter(producto=>{
            return producto.id == idBebida
        })
        res.render('detalleProducto', {
            title: 'Detalle de Producto | Buenas tintas',
            css: 'detalleProducto.css',
            producto:productos[0],
        })
    }
    
}