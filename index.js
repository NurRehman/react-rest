var express = require("express");
var arrayPagination = require("array-pagination");
var bodyParser = require("body-parser");
var _ = require("underscore");
var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var items = [];

/*for (var i = 0; i < 10; i++) {
    items.push({
        id: "" + i,
        name: "name " + i,
        title: "title " + i,
        description: "description " + i
    });
}*/

/*app.get("/api/v1/items", function(req, res) {
    res.send(arrayPagination.paginate({
        items: items,
        page: req.query.page
    }));
});*/

var server = app.listen(3300, function () {
    console.log("Listening on port %s...", server.address().port);
});
