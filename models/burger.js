
module.exports = (sequelize, DataTypes)=> {
var Burger = sequelize.define("burgers",{
    burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

Burger.associate = models=>{

    Burger.belongsTo(models.Customer, {
        foreignKey: {
            allowNull: true
            
        }
    })
} 
return Burger
}