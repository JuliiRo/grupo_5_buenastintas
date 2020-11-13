module.exports = (sequelize,dataTypes) => {

    let alias = "Users";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement: true,
            primaryKey : true
        },
        category : {
            type : dataTypes.STRING(15),
            allowNull : false,
            defaultValue: "cliente"
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        last_name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        email : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        date: {
            type: dataTypes.DATE(),
            allowNull: false,

        },
        password : {
            type : dataTypes.STRING(150),
            allowNull : false,
        },
        photo: {
            type : dataTypes.STRING(100),
        },
        phone: {
            type : dataTypes.STRING(45),
            allowNull : false,
        }
       
    }

    let config = {
        tableName : "users",
        timestamps : true,
        underscored : true
    }



    const User = sequelize.define(alias,cols,config);
    // User.belongsToMany(models.Productos,{
    //     as : 'Productos',
    //     through:'Carts',
    //     foreignKey:'id_usuarios',
    //     otherKey:'id_productos',
    //     timestamps:false
    

    // })
    return User;
}