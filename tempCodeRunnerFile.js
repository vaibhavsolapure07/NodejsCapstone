const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/nature-test", {
    useNewUrlParser: true
})
.then(() => console.log("connected successfully to db"))
.catch((err) => {
    console.log(err)
    process.exit()
})


const app = express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.json("server is running")
})

const port = 3000
app.listen(port, ()=> console.log(`server is listening on port ${port}`))