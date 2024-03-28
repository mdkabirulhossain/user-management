const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const users =[
    {id:1, name:'Md. Kabirul Hossain', email:'k@gmail.com'},
    {id:2, name:'Md. Umar Farooq', email:'u@gmail.com'},
    {id:1, name:'Md. Sheik Rakin', email:'s@gmail.com'}
]

//call Midleware
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Welcome to User Management System Server site");
})
app.get('/users', (req, res)=>{
    res.send(users);
})
app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}`);
})