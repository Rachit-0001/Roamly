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
        default:"https://www.booking.com/hotel/hr/vila-vala.html",
        set: (v) => v === "" ? "https://www.booking.com/hotel/hr/vila-vala.html" : v,
    },
    price:Number,
    location:String,
    country:String
});

const Listing =moongose.model("Listing",listingSchema);
module.exports=Listing;
