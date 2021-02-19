import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Maria",
    lastName: "Kostadima",
    age: "28",
  },
];

//all routes starting with /users
router.get("/users", (req, res) => {
  res.send("Hello");
});
