const mongoose = require('mongoose');
async function db() {
    await mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("Database connected"))
    .catch((err)=>console.log("Could not connect to database"))
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  /*const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
  })*/

  
  //const User=mongoose.model('UserData',userSchema)

module.exports=db