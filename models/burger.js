var orm = require('../config/orm.js')

var burgerModel = {
    allBurgers: (cb) =>{
        orm.selectAll('burgers', (res)=>{
            cb(res)
        }) 
    },
    addBurger: (name, cb) =>{
        orm.insertOne('burgers', ['burger_name', 'devoured'], [name, 0], cb)
    },
    updateBurger:(condition, cb) =>{
        orm.updateOne('burgers', condition, cb)
    }
}

module.exports = burgerModel