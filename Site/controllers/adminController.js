module.exports = {
    admin:function(req,res){
       // http://localhost:3000/admin
        res.render('admin', { 
            title: 'Admin | Buenas Tintas' ,
            css: 'admin.css'
        })
    }
}