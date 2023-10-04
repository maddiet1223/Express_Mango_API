const express = require('express');

const app = express();

//Middlewares 
app.use('/posts',()=>{
    console.log('This is a middleware running');
})

//ROUTES

app.get('/',(req,res)=>{
    res.send('WE are on home')
});





//How to listen to the server

app.listen(3000);

