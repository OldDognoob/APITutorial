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

//application listen for incoming request
app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${POST}`));