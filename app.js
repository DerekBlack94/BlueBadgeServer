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

app.listen(3000, () => {
    console.log('App is listening on port 3000.');
})