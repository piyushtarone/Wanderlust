// const Review = require("./models/review"); 
const express = require("express");
const router = express.Router;
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./models/listing.js") //indicztion error not a problem
const path = require("path");
const methodOverride = require('method-override'); //requires the method-override library
const ejsMate = require("ejs-mate"); //ejs-mate is a library that allows us to use layout files with EJS
// const wrapAsync = require("./utils/wrapAsync.js")
const Expresserror = require("./utils/Expresserror.js")

const listings = require("./routes/listing.js")
const reviews = require("./routes/reviews.js")


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate) //use the ejs-mate package 
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method')); //allows us to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it

main().then(()=>{
    console.log("connected to mongodb successfully")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("Hello Everyone")
})



app.use("/listings",listings); //accessing all the routes from the "listing.js"
app.use("/listings/:id/reviews",reviews);


app.all(/.*/,(req,res,next)=>{
    next(new Expresserror(404,"Page not found"))
});

app.use((err,req,res,next)=>{
    let {statuscode=500,message="Something went wrong again"}=err;
    res.status(statuscode).send(message)
});

app.listen(8080, ()=>{
    console.log("Server in running properly");
})

