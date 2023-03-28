const mongoose = require('mongoose');
//const config = require('config');
// package.function.variable
const db = "mongodb+srv://arpita:April5th@cluster0.zdtiwoa.mongodb.net/books?retryWrites=true&w=majority"
const connectDB = async() =>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
    }
    catch (err){
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;




// const {mongoClient, MongoClient} = require("mongodb")
// const Db = process.env.ATLAS_URI

// const client = new MongoClient(Db,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// var _db
// module.exports = {
//     connectToServer: function (callback){
//         client.connect(function(err, db){
//             if(db){
//                 _db = db.db("clustor0")
//                 console.log("connected atlas")
//             }
//             return callback(err)

//         })
//         console.log(`Server is running on port:${port}`)
//     }, 
//     getDb: function(){
//         return _db
//     }
// }