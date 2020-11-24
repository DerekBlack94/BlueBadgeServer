
// const jwt = require('jsonwebtoken');
// const User = require('../db').import('../models/user'); 

// const validateSession = (req, res, next) => {
//     const token = req.headers.authorization; 
//     console.log('token --> ', token);

//     if(!token) {
//         return res.status(403).send({ auth: false, message: "No token provided" }) 
//     } else {
//         jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
//             console.log('decodeToken --> ', decodeToken);
//             if (!err && decodeToken) { 
//                 User.findOne({ 
//                     where: {
//                         id: decodeToken.id
//                     }
//                 })

//                 .then(user => {
//                     console.log('user --> ', user);
//                     if (!user) throw err; 
//                     console.log('req --> ', req);
//                     req.user = user; 
//                     return next(); 
//                 })
//                 .catch(err => next(err));
//             } else {
//                 req.errors = err;
//                 return res.status(500).send('Not authorized.')
//             }
//         })
//     }
// }

// module.exports = validateSession;

const jwt = require('jsonwebtoken');
const {User} = require('../models');

const validateSession = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();

    } else if (req.headers.authorization) {
        const {authorization} = req.headers;

        const payload = authorization ? jwt.verify(authorization, process.env.JWT_SECRET) : undefined;
        console.log(payload);

        if(payload){
            User.findOne({
                where: {id: payload.id} 
            })
            .then(user => {
                req.user = user;
               

                next() 
            })
        } else {
            res.status(401).json({
                message: "Not Authorized."
            })
        } 
        }else {
            res.status(401).json({
                message: "Not Allowed"
            })
    }
}
module.exports = validateSession

