var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.get("/cats", function(req, res){
    res.render("cats");
});
app.get("/cats/felix", function(req, res){
    res.render()
});
app.get("/cats/minka", function (req, res) {
    res.render()
});
app.get("/cats/gismo", function (req, res) {
    res.render()
});
app.listen(8000);
