module.exports = (sequelize,dataTypes) => {
    let alias = "Categoria";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        
        },
    }

    let config = {
        tableName: "Categories",
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config);
    Category.associate = function(models){
        Category.hasMany(models.Productos,{
            as : 'productos',
            foreignKey : 'id_categoria'
        })
    }
    return Category

}