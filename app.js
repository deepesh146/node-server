const { Router } = require("express");
const express = require("express")
const app = express();
const router = require("./routes/router")
// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usersdb');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database Connected successfully");
});





app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
	extended: true
}));

app.use('/',router)

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running at ` + (process.env.port || 3000))
})