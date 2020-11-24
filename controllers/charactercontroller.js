// <<<<<<< HEAD
// const express = require('express');
// const router = express.Router();
// const {Characeter} = require('../models/character')
// const validateSession = require('../middleware/validateSession')


// router.get("/", (req, res) =>{
//     Characeter.findAll()
//     .then(characeter => res.status(200).json(characeter))
//     .catch(err => res.status(500).json({
//         error: err
//     }))
// })

// router.get('/:characterName', (req, res) => {
//     Characeter.findOne({ where: { characeter: req.params.characeter }})
//       .then(characeter => res.status(200).json(characeter))
//       .catch(err => res.status(500).json({ error: err}))
// })
// =======
// let express = require('express');
// let router = express.Router();
// let validateSession = require('../middleware/validate-session');
// const Character = require('../db').import('../models/character');

// router.get('/practice', function(req, res){
//     res.send('message')
// })

// //uncomment validateSession when that file is complete & user tokens are set up

// //*CHARACTER CREATE
// router.post('/create', /*validateSession,*/ (req, res) => {
//     const characterCreate = {
//         project_name: req.body.character.project_name,
//         name: req.body.character.name,
//         age: req.body.character.age,
//         race: req.body.character.race,
//         gender: req.body.character.gender,
//         character_description: req.body.character.character_description,
//         background: req.body.character.background,
//         // owner: req.user.id 
//             //uncomment when user model/controller is defined
//     }
//     Character.create(characterCreate)
//         .then(character => res.status(200).json({
//             character,
//             message: "Character successfully created!"
//         }))
//         .catch(err => res.status(500).json({ error: err }))
// });

// //*CHARACTER UPDATES
// router.put('/:id', /*validateSession,*/ (req, res) => {
//     const updateCharacter = {
//         project_name: req.body.character.project_name,
//         name: req.body.character.name,
//         age: req.body.character.age,
//         race: req.body.character.race,
//         gender: req.body.character.gender,
//         character_description: req.body.character.character_description,
//         background: req.body.character.background
//     };

//     const query = {where: {id: req.params.id, owner: req.user.id}};

//     Character.update(updateCharacter, query)
//         .then((characters) => res.status(200).json({
//             updateCharacter,
//             message: "Character successfully updated!"
//         }))
//         .catch((err) => res.status(500).json({ error: err }))
// })

// module.exports = router
// >>>>>>> 106f6af5617b4c648799b03592f4229ca798935a
