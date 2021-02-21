import {v4 as uuidv4} from 'uuid';

export const createUser = (req,res) => {
    const user = req.body;
  
    user.push({...user, id: uuidv4()});
  
    res.send(`User with the name ${user.firstName}added to the database!`);
  };

export const getUser = (req, res) => {
    res.send("users");
  }

export const getUserId = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUserId = (req,res)=>{
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
  }

  export const patchUserId = (req,res)=>{
    const {id} = req.params;
    const{firstName, lastName, age} = req.body;
  
    if(firstName) user.firstName = lastName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    //const userToBeUpdated = users.find((user)=> user.id === id);
    res.send(`User with the id ${id} has been updated`);
  }