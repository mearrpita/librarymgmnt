const express = require("express")
const connectDB = require("./config/db")
const routes = require("./routes/api/books")

const app = express()
//const cors = require("cors");
//const mongoose = require("mangoonse")

connectDB().then(() => {
    console.log("Connected to mongodb")
})

require("dotenv").config( {path: "./config.env"})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/", routes)

//var route

//app.get("/", (req, res)=> res.send("hello world"))


//

// const dbo = require("./db/conn")
//  app.listen(port, () =>{
//     dbo.connectToServer(function (err) {
//         if (err)
//         {
//             console.log(err)
//         }
//     })
//     console.log(`Server is running on port: ${port}`);
//  })

// app.get("/", (req, res) => {
//     res.json({
//         "project-name" : "library management"
//     })
// })