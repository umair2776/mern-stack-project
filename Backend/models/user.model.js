const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:Number,require:true},
    password:{type:String,require:true},
    confirmPassword:{type:String,require:true},
    isLoggedOut: { type: Boolean, default: false }
})

module.exports=mongoose.model("User",userSchema)