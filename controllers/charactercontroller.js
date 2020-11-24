let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Character = require('../db').import('../models/character');

//uncomment validateSession when that file is complete & user tokens are set up

//*CHARACTER CREATE
router.post('/create', /*validateSession,*/ (req, res) => {
    const characterCreate = {
        project_name: req.body.character.project_name,
        name: req.body.character.name,
        age: req.body.character.age,
        race: req.body.character.race,
        gender: req.body.character.gender,
        character_description: req.body.character.character_description,
        background: req.body.character.background,
        // owner: req.user.id 
            //uncomment when user model/controller is defined
    }
    Character.create(characterCreate)
        .then(character => res.status(200).json({
            character,
            message: "Character successfully created!"
        }))
        .catch(err => res.status(500).json({ error: err }))
});

//*CHARACTER UPDATES
router.put('/:id', /*validateSession,*/ (req, res) => {
    const updateCharacter = {
        project_name: req.body.character.project_name,
        name: req.body.character.name,
        age: req.body.character.age,
        race: req.body.character.race,
        gender: req.body.character.gender,
        character_description: req.body.character.character_description,
        background: req.body.character.background
    };

    //Uncomment req.user.id when User is done
    const query = {where: {id: req.params.id, /*owner: req.user.id*/}};

    Character.update(updateCharacter, query)
        .then((characters) => res.status(200).json({
            updateCharacter,
            message: "Character successfully updated!"
        }))
        .catch((err) => res.status(500).json({ error: err }))
})




router.get("/", (req, res) =>{
    Character.findAll()
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.get('/:characterName', (req, res) => {
    Character.findOne({ where: { character: req.params.character }})
        .then(character => res.status(200).json(character))
        .catch(err => res.status(500).json({ error: err}))
})


module.exports = router
