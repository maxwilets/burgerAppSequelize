var express =require('express')

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
var db = require("./models")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static(__dirname+'/public'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require('./controllers/burgers_controller.js')
app.use(routes)

db.sequelize.sync({ force:true}).then(()=>{
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })});