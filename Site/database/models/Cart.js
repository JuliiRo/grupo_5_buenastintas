module.exports = (sequelize , dataTypes) =>{

    let alias = "Carts"

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        id_usuario: {  
            
            type: dataTypes.INTEGER(11),
            allowNull : false, 
        },
        id_producto: {  
            
            type: dataTypes.INTEGER(11),
            allowNull : false, 
        },

    }

    let config = {
        tableName : "carts",
        timestamps : false

    }

    const Carts = sequelize.define(alias , cols , config);
      
   
    return Carts  
    }
