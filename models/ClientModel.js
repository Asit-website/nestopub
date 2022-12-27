const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    BuyId:{
        type:String,
        required:false,
        set: z => z === '' ? undefined : z
    },
    BuyName:{
        type:String,
        required:false,
        set: a => a === '' ? undefined : a
    },
    BuyerMobile:{
        type:String,
        required:false,
        set: b => b === '' ? undefined : b
    },
    BuyerLocation:{
        type:String,
        required:false,
        set: c => c === '' ? undefined : c
    },
    BuyerBudget:{
        type:String,
        required:false,
        set: d => d === '' ? undefined : d
    },
    BuyerBhk:{
        type:String,
        required:false,
        set: e => e === '' ? undefined : e 
    },
    BuyerImages:{
        type:Object,
        required:false,
        set: xy => xy === '' ? undefined : xy
    },
    role:{
        type:Number,
        default:3
    }
},{
    timestamps:true,
})

module.exports = mongoose.model("Client", clientSchema);