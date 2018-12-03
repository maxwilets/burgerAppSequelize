orm = {
    selectAll: (table, cb) => {
        //get request, displays all of the burgers on the app
    
        var query = "SELECT * FROM " + table;
        connection.query(query, (err, res) => {
            if (err) {
                throw err
            };
            cb(res)

        })

    },
    insertOne: (table,cols,value, cb) => {
        //POST request add a new burger into the database
        var query = "INSERT INTO "+table +"("+ cols +")"+ "VALUES("
        query += value + ");"

        connection.query(query, console.log('query!!!! '+ query), (err, res) => {
            if (err) {
                throw err
            }
            cb(res)
        })
    },
    updateOne: (table, condition, cb) => {
        //UPDATE request changes states from the database
        var query = "UPDATE " + table + " SET DEVOURED = true"
        query += " WHERE id=" + condition + ';'
       // var query = "UPDATE burgers SET devoured = true WHERE id =" + id

        connection.query(query, (err, res) => {
            if (err) {
                throw err
            }
            cb(res)
        })
    }
}



module.exports = orm