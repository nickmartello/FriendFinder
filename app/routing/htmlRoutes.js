// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================
var path = require("path");

module.exports = function(app){
    app.get("/survey", function(_req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("*", function(_req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};