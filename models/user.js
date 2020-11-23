const jwt = require('jsonwebtoken');
const {User} = require('../models');

const validateSession = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();

    } else if (req.headers.authorization) {
        const {authorization} = req.headers;

        const payload = authorization ? jwt.verify(authorization, process.env.JWT_SECRET) : undifined;
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