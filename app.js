require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');


let character = require('./controllers/charactercontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

// app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/character', character);

app.use('/user', user);


app.use('/test', function(req, res){
    res.send("message")
})


app.listen(3000, () => {
    console.log('App is listening on port 3000.');
})