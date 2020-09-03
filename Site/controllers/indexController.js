const path = require('path');

module.exports = {
    // http://localhost:3000/
    index:function(req,res){
        res.render('index', { 
        title: "Home | Buenas Tintas",
        css:"index.css",
        })
    }
}