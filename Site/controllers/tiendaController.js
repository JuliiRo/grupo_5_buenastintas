const { path } = require("../app");

//const path = require('path');
//const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))

module.exports = {
    tienda:function(req,res){
        res.render('index', { title: 'Express' })
    }
}