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

router.get('/:id')

export default router;