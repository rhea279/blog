const express = require("express")
const app = express()
const port = 1111;
console.log(app);
const mongoose = require('mongoose');

const hbs = require('hbs');

const path = require("path")



let blogs = []
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');


app.use("/", require("./routes/blog"))
mongoose.connect('mongodb://127.0.0.1:27017/BlogPage')
    .then(() => {
        app.listen(port, () => {
            console.log("https://localhost:" + port);
        })
    })