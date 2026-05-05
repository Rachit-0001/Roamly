const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing =require("./models/listing.js");
const path=require("path");
const Mongo_URL="mongodb://127.0.0.1:27017/wanderlust";

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main()
.then(()=>{
    console.log("Connect succesfully");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(Mongo_URL);
}

//index Route
app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});

});

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//show route
app.get("/listings/:id",async (req,res)=>{
    let{id} =req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//create Route
app.post("/listings",async(req,res)=>{
  //  let {title,description,image,price,country,location}=req.body;
    const newListing= new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

//update route
app.put("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id,
        { ...req.body.listing },
        { new: true });
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.send("Done");
    res.redirect("/listings");
});


// app.get("/testListing",async (req,res)=>{
//     let sampleListing =new Listing({
//         title: "My new Villa",
//         description:"By the beach",
//         price:1200,
//         location:"Goa",
//         country:"India",

//     });
//     await sampleListing.save();
//     console.log("sample was save");
//     res.send("succesfull testing");
// });

app.get("/",(req,res)=>{
    res.send("Hi");
});

app.listen(3000,()=>{
    console.log("Server is running");
});