const express = require('express');
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb://127.0.0.1:27017/civilloan", {
    useNewUrlParser: true
})
.then(() => {
    console.log("Successfully connected to the database!");
})
.catch((err) => {
    console.log(err);
    process.exit()
})

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.json("Server is running")
})

require("./routes/app_routes.js")(app);


const port = 8081
app.listen(port, ()=> console.log(`Server is listening on port http://localhost:${port}`))