var db = require('../models')

module.exports = (app)=>{

    app.get('/', (req, res)=>{
        var query = {}
        if (req.query.customer_id){
            query.Customer = req.query.customer_id
        }

        db.Burger.findAll({
            where: query,
            include: [db.Customer]
        })
        .then((postData)=>{
            var hbsObject = {burgers: postData}
             res.render("index", hbsObject)
        })
    });

    app.post("/api/burgers", (req,res)=>{
        db.Burger.create({
            burger_name: req.body.name
        }).then((dPost)=>{res.redirect("/")})
    })

    app.put("/api/posts", (req, res)=>{
        var customerName = req.body.customer_id

        db.Customer.findAll({
            where: name= customerName
        })
        .then((data)=>{
            if(data.length > 0){
                burgUpdate(data[0].id)
            }
            else{
                db.Customer.create({
                    name: req.body.name
                })
                .then((data)=>{burgUpdate(data.id)})
            }
        })
        
    })


    burgUpdate = (customer)=>{
        db.Burger.update(
            {
                devoured:true,
            
            },
            {
                where: {
                    id: req.body.id
                }
            }
        ).then(()=>{
            res.redirect('/burgers')
        })
    }
}
