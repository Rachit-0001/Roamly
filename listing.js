const moongose =require("mongoose");
const Schema =moongose.Schema;

const  listingSchema =new Schema({
    title:String,
    description:String,
    image:String,
    price:Number,
    location:String,
    country:String
});

const Listing =moongose.model("Listing",listingSchema);
modules.export=Listing;
