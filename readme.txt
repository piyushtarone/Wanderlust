In this project we have implemented new things like : 

1 EJS-Mate: 
{
    This is use to create a boilerplate code which can be used in multiple files in the project or we can say that multiple pages of the website.
    Its very simple to use and syntax

    "npm i ejs-mate":
    This is the command to install the package 

    <% layout('boilerplate') -%>
    this Cammand is used to apply the boilerplate code to every file 

    //While this line is inserted in the file their is no need of other lines except  <body> 

    Const ejsmate = require ("ejs-mate)
    app.engine(ejs,ejs-mate)

}

2 Card:
{
    The card tamplet was taken from the bootstrap quiclstart
    Then arranged the card in proper manner 

    OverLay :{
        This feature is used to add some text on the image and with the help of opacity we can make a animation of hover over the image 
    }
}

3 Error Handling:
 a.WrapAsync function:{
    This is a .js file which calls a function which calls another function for catching the error 
    This function is used in every async function as we have to show error from the database
 }
 
 b.Custom ExpressError:{
    This is a custom error which is used for a universal error i.e if the request does not mathch with the any of the defined route 
    then the request will got to the universal error which will handle it properly.

    syntax&example{
        app.all("*",(req,res,next)=>{  //"*" used for universal error means when the request does not match with any response then it goes to universal error handler
        next(new Expresserror(404,"Page not found"))
});
    }
 }
 
4 Review Machanism :
 a. Hear we will establish one to many relations 
   {
    one user = Many reviews on multiple locations 
   }
 b. First define new schema for the review {Comment , Rating , CreatedAT("for date")}
 c. Add the review form in the show.ejs {Below the details of the location}
 d. Submitting the review:
 {
    [
        1. Create a route for submitting the review: {POST Request}
         a: We cannot create a saparate route "/review" for the review because we are not working with the reviws saperately .
         b: We will establish a connection with the review "One-to-many"
         c: Route will be "/listings/:id/reviews"

        2. Deleting the reviews form the database as well as from the listing :
         a: This is done with the help of $pull query
         b: This query pulls the reviews related to the listing and perfom the delete operation when the listing is deleted
         c: Its like a middleware which executes as soon as the delete operation is performed on the listings.
    ]
 }
 
5. Express Router:
 {
    It is the method of structuring your code and make it more readable for the user . It helps to maintain your primary app.js file 
    in proper structure and not get bloated .
 }
 Method:
  a. First we can separate the models from the main file , i.e for example you have 2 models in the program that is "user" and "post".
  b. Then you can add the models saparately in the two sub folders.
  c. Then by adding just a single line in the main file you can access all the routes of that folder 
  d. Line of code :app.use("/users",user);
  e. This line has "/users" which is the comman part of the routes of the user model
  f. It helps to find the exact route easily
  g. By this you can maintain and keep your main file more clean and readable.

Process:
 a. We have created a new folder "routes"
 b. Then we added all the listing methods "create,update,delete,show"
 c. And added all their requirements\
 d. Lastly accessed all of them by adding app.use("/listings",listing) //in the app.js
  