// require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');


let character = require('./controllers/charactercontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(express.json());

app.use('/test', function(req, res){
    res.send("message")
})

// app.use('/user', user);
    //if you uncomment this it messes stuff up with nothing in the usercoontroller/user model
app.use('/character', character);

db.authenticate()
.then(() => db.sync()) // => {force,ture}
.then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server: ] App is listing on Port ${process.env.PORT}`));

})
.catch((err) =>{
    console.log("[server:] Crashed!");
    console.error(err);
})