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
        },
        // address : {
        //     type : dataTypes.STRING(150),
        // },
        // city: {
        //     type : dataTypes.STRING(45),
        // },
        // province : {
        //     type : dataTypes.STRING(45),
        // },
       
    }

    let config = {
        tableName : "users",
        timestamps : true,
        underscored : true
    }



    const User = sequelize.define(alias,cols,config);
    User.associate = function(models){
        User.belongsToMany(models.Productos,{
            as : 'productos',
            through:'carts',
            foreignKey:'id_usuario',
            otherKey:'id_producto',
            timestamps:false
            })
    }
    return User;
}