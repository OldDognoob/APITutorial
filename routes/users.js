import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Maria",
    lastName: "Kostadima",
    age: "28",
  },
  {
    firstName: "Dimos",
    lastName: "Christidis",
    age: "44",
  }
];

//all routes starting with /users
router.get("/users", (req, res) => {
  res.send("Hello");
});

router.post('/', (req,res) => {
    const user = req.body;

    user.push({...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName}added to the database!`);
});

//users/2 => req.params(parameters to our function)
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});
// we create a callback function with request , response
router.delete('/:id', (req,res)=>{
  //get the id from request params
  const{id}= req.params;
  //we want to remove the element from the array we use the filter method
  // we got the user for each iteration
  // whatever is equal to true we keep the array
  //whatever is equal to false we remove it
  // we need to keep all the users except the one who is in line 40

// how it works: 
/* we dont want to keep john with id 123 in the array. 
The use of the unequality operator says since john id is equal with the id 123
this, will return false and so John will be removed. On the other hand
Jane id 321 is not  indeed equal means it is true and we keep her id.  */
  users = users.filter((user)=>user.id != id);
  res.send(`User with the id ${id} deleted from the database.`);
});

export default router;