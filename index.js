var express = require("express");

var app = express();

var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/html-routes.js")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('./public', 'index.html'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, './public/', 'index.html'));
    });
  } 

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});