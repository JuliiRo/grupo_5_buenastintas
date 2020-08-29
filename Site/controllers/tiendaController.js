const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))

module.exports = {
    //http://localhost:3000/tienda
    tienda:function(req,res){
        res.render('index', { title: 'Tienda' })
    },
    //http://localhost:3000/tienda/carrito
    carrito:function(req,res){
        res.render('index', { title: 'Carrito' })
    }
}