const express = require('express');
const router = express.Router();
const {Characeter} = require('../models/character')
const validateSession = require('../middleware/validateSession')


//**GET ALL */

router.get("/", (req, res) =>{
    Characeter.findAll()
    .then(characeter => res.status(200).json(characeter))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//**GET BY NAME */

router.get('/:characterName', (req, res) => {
    Characeter.findOne({ where: { characeter: req.params.characeter }})
      .then(characeter => res.status(200).json(characeter))
      .catch(err => res.status(500).json({ error: err}))
})

//** DELETE */

/*router.delete('/delete/:id', (req, res) =>{
    Characeter.destroy({
        where: { id: req.params.id}
    })
    .then(characeter => res.status(200).json(characeter))
    .catch(err => res.json({ error: err}))
})*/

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id} };

    characeter.destroy(query)
    .then(() => res.status(200).json({ message: "Character Entry Removed"}))
    .catch((err) => res.status(500).json({ error: err}));
});


module.exports = router;