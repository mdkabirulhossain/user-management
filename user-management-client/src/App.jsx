
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data =>setUsers(data))
  }, [])
const handleAddUsers = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  // console.log(name, email);
  const user ={name, email};
  console.log(user);
}
  return (
    <>
      <h1>User Management system client site</h1>
      <h3>Total Number of Users is {users.length}</h3>
      <form onSubmit={handleAddUsers} action="">
        <input type="text" name="name" id="" placeholder='Enter your name' />
        <br />
        <input type="email" name="email" id="" placeholder='Enter your email'/>
        <br />
        <input type="submit" value="Add User" />
      </form>
     
    </>
  )
}

export default App
