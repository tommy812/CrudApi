//MONGO
//username:
//thomastamagni
//password:
//kiTWeugfPBv8wmKC
//connection string:
//mongodb+srv://thomastamagni:kiTWeugfPBv8wmKC@cruddb.lhddr.mongodb.net/?retryWrites=true&w=majority&appName=CrudDB

const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json())

//routes
app.use("/api/products", productRoute)

//test connection
app.get('/', (req,res) => {
    res.send("hello from nodes");
});




mongoose.connect(
    "mongodb+srv://thomastamagni:kiTWeugfPBv8wmKC@cruddb.lhddr.mongodb.net/?retryWrites=true&w=majority&appName=CrudDB")
    .then(() => {
        console.log("connected to DB")
        app.listen(3000, () => {
            console.log('Server Running on port 3000')
    });
})
.catch(() => {
    console.log("failed to connected to DB")
})