//install express server
const express=require('express');
const path=require('path');

const app=express();

//serve only the static files form the dis directory
app.use(express.static('./dist/gestion-de-almacenes-front'));

app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/gestion-de-almacenes-front/'}),
);

//start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080);