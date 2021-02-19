//import express
import express from 'express';
//import body-parser
import bodyParser from 'body-parser';

//initialize express application
const app = express();

//initialize port 
const PORT = 5000;

//middleware
app.use(bodyParser.json());

//routes
app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

//application listen for incoming request
app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${POST}`));
// app.listen(5000, function(){
//     console.log("info",'Server is running at port : ' + 5000);
// });