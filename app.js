require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');


let character = require('./controllers/charactercontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(express.json());

app.use('/user', user);
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