const express = require('express');
const router = express.Router();
const Snips = require('./models/snips')

router.get('/list', async (req, res) => {
    try {
        const snips = await Snips.find();
        res.json(snips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', (req, res) => {

});

router.post('/create', async (req, res) => {
    const snip = new Snips({
        content: req.body.content,
    });

    try {
        const newSnip = await snip.save();
        res.status(201).json(newSnip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
});

router.delete('/:id', (req, res) => {

});

module.exports = router;