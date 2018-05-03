var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.get("/cats", function(req, res){
    res.render("cats");
});
app.get("/cats/felix", function(req, res){
    var info = {
        img: "/images/cat1.jpg",
        name: "Felix",
        age: 6,
        favorite_food: "Fancy Feast",
        toys: ["yarn", "toy mouse"]
    };
    res.render("data", info);
});
app.get("/cats/minka", function (req, res) {
    var info = {
        img: "/images/cat2.jpg",
        name: "Minka",
        age: 18,
        favorite_food: "Expensive Tuna",
        toys: ["feather", "socks"]
    };
    res.render("data", info);
});
app.get("/cats/gismo", function (req, res) {
    var info = {
        img: "/images/cat3.jpg",
        name: "Gismo",
        age: 1,
        favorite_food: "Chicken",
        toys: ["laser pointer", "shoe laces"]
    };
    res.render("data", info);
});
app.listen(8000);
