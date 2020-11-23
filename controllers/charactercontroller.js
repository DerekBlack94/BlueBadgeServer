let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Character = require('../db').import('../models/character');

//*CHARACTER CREATE
router.post('/create', validateSession, (req, res) => {
    const characterCreate = {
        project_name: req.body.character.project_name,
        name: req.body.character.name,
        age: req.body.character.age,
        race: req.body.character.race,
        gender: req.body.character.gender,
        character_description: req.body.character.character_description,
        background: req.body.character.background,
        owner: req.user.id
    }
    Character.create(characterCreate)
        .then(character => res.status(200).json({
            character,
            message: "Character successfully created!"
        }))
        .catch(err => res.status(500).json({ error: err }))
});

//*CHARACTER UPDATES
router.put('/:id', validateSession, (req, res) => {
    const updateCharacter = {
        project_name: req.body.character.project_name,
        name: req.body.character.name,
        age: req.body.character.age,
        race: req.body.character.race,
        gender: req.body.character.gender,
        character_description: req.body.character.character_description,
        background: req.body.character.background
    };

    const query = {where: {id: req.params.id, owner_id: req.user.id}};

    Character.update(updateCharacter, query)
        .then((characters) => res.status(200).json({
            updateCharacter,
            message: "Character successfully updated!"
        }))
        .catch((err) => res.status(500).json({ error: err }))
})