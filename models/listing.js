const moongose =require("mongoose");
const Schema =moongose.Schema;

const  listingSchema =new Schema({
    title:{
        type: String,
        required: true,
    },
    description:String,
    image:{
        type: String,
        set: (v) => v === "" ? "default link" : v,
    },
    price:Number,
    location:String,
    country:String
});

const Listing =moongose.model("Listing",listingSchema);
modules.export=Listing;
