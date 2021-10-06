const express = require('express');
const router = express.Router();
const Snip = require('./models/snips')

router.get('/list', async (req, res) => {
    try {
        const snips = await Snips.find();
        res.json(snips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const snip = await Snip.findById(id)
        res.render('')
    } catch (err) {

    }
});

router.post('/create', async (req, res) => {
    const title = req.body.title
    const content = req.body.content

    try {
        const newSnip = await Snip.create({ title, content });
        res.redirect(`/${newSnip.id}`)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
});

router.delete('/:id', (req, res) => {

});

module.exports = router;