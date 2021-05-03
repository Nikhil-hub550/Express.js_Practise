const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
//built in middleware

const staticPath = path.join(__dirname, "../public");

// to set the view engine
app.set('view engine','hbs');
app.use(express.static(staticPath));

//template engine route
app.get('',(req,res)=> {
    res.render('index',{
        channelName: "Nikhil",
    });
});

app.get("/",(req,res) => {
    res.send('hello from the server');
});

app.listen(port, () => {
    console.log(`server start at ${port}`);
});