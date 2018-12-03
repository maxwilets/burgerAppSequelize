module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        // Giving the Author model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Customer.associate = (models) => {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Customer.hasMany(models.Burger, {
            onDelete: "cascade"
        });
    };

    return Customer;
};