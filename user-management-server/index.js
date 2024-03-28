const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const users =[
    {id:1, name:'Md. Kabirul Hossain', email:'k@gmail.com'},
    {id:2, name:'Md. Umar Farooq', email:'u@gmail.com'},
    {id:3, name:'Md. Sheik Rakin', email:'s@gmail.com'}
]

//call Midleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Welcome to User Management System Server site");
})
app.get('/users', (req, res)=>{
    res.send(users);
})

app.post('/users', (req, res)=>{
    console.log('Post Api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}`);
})