const express = require('express');
const router = express.Router();
const countryStorege = require('../storage/mongo/storage')
const { validate } = require('../validatetion/validate');

router.get('/', async(req, res) => {
    const country = await countryStorege.getAll();
    res.json({ success: true, country });
});

router.post('/create', async(req, res) => {
    try {
        await validate(req.body);

        await countryStorege.create(req.body);

        res.status(201).json({ success: true, message: "Country created" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        let country = await countryStorege.get(req.params.id);

        res.json({ success: true, country });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
});

router.patch('/update/:id', async(req, res) => {
    try {
        await validate(req.body);
        await countryStorege.update(req.params.id, req.body);

        res.status(200).json({ success: true, message: "Country updated" });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
});

router.delete('/delete/:id', async(req, res) => {
    try {
        await countryStorege.delete(req.params.id);

        res.status(200).json({ success: true, message: "Country deleted" });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
});

module.exports = router;