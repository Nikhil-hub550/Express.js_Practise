const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res) => {
    res.write('<h1>Welcome to home page</h1>');
    res.write('<h1>Welcome to my home page</h1>');
    res.send();
});
app.get('/about',(req,res) => {
    res.send('Welocme to about page');
});
app.get('/contact',(req,res) => {
    res.send('Welocme to contact page');
});
// app.get('/temp',(req,res) => {
//     res.send([
//         {
//         id:1,
//         name:"Nikhil",
//     },
//     {
//         id:2,
//         name:"Vansh",
//     },
//  ]);
// });
app.get('/temp',(req,res) => {
    res.json([
        {
        id:1,
        name:"Nikhil",
    },
    {
        id:2,
        name:"Vansh",
    },
 ]);
});
app.listen(port, () => {
console.log(`listening to the port no ${port}`);
});
    
