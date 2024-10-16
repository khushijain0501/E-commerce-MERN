const mongoose=require('mongoose');
const bcrypt=require("bcryptjs")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Your name is required"],
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"Your email address is required"],
        unique:true,
    },
    password:{
        type:String,
        required: [true, "Your password is required"],
    },
    mobile:{
        type:String,
    },
    address:{
        type:Array,
        default:[]
    },
    cart:{
        type:Array,
        default:[]
    },
    avatar:{
        type:String,
        default:"",
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },
});

userSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports=mongoose.model("User",userSchema);