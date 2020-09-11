const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))

module.exports = {
    //http://localhost:3000/tienda
    tienda:function(req,res){
        res.render('tienda', { 
            title: 'Tienda | Buenas tintas',
            css: 'tienda.css'
        })
    },
    //http://localhost:3000/tienda/carrito
    carrito:function(req,res){
        res.render('carrito', { 
            title: 'Carrito | Buenas tintas',
            css: 'carrito.css',
        })
    },
        //http://localhost:3000/tienda/detalle
    detalle:function(req,res){
        idBebida = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == idBebida
        })
        res.render('detalleProducto', {
            title: 'Detalle de Producto | Buenas tintas',
            css: 'detalleProducto.css',
            producto:producto[0],
        })
    },
}