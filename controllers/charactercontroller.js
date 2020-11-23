const express = require('express');
const router = express.Router();
const {Characeter} = require('../models/character')
const validateSession = require('../middleware/validateSession')


router.get("/", (req, res) =>{
    Characeter.findAll()
    .then(characeter => res.status(200).json(characeter))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.get('/:characterName', (req, res) => {
    Characeter.findOne({ where: { characeter: req.params.characeter }})
      .then(characeter => res.status(200).json(characeter))
      .catch(err => res.status(500).json({ error: err}))
})