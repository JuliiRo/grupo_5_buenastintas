module.exports = (sequelize,dataTypes) => {
    let alias = "Productos";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        bodega: {
            type : dataTypes.STRING(100),
            
        },
        nombre: {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        varietal: {
            type : dataTypes.STRING(100),
            
        },
        precio : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        descuento : {
            type : dataTypes.INTEGER(11),
            defaultValue:0
        },
        descripcion : {
            type : dataTypes.STRING(200),
            allowNull : false
        },
       image :{ 
            type: dataTypes.STRING(150),
            defaultValue:'undefined.jpg'
      },
       id_categoria: {
            type: dataTypes.INTEGER(11),
            allowNull : false
        }
    }

    let config = {
        tableName : "products",
        timestamps : true,
        underscored : true
    }

    const Product = sequelize.define(alias,cols,config);
    Product.associate = function(models){
        Product.belongsTo(models.categories,{
            as : 'categorias',
            foreignKey : 'id_categoria'
        })

        Product.belongsToMany(models.Users,{
            as : 'Usuarios',
            through:'Carts',
            foreignKey:'id_producto',
            otherKey:'id_usuarios',
            timestamps:false
        

        })
    }
    return Product;
}