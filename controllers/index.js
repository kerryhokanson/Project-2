const router = require('express').Router();
const { Event } = require('../models');

router.get('/', (req, res) => {
    try{
        res.render('calendar');
    } catch(err){
        res.status(500).json(err);
    }
});

router.get('/event', (req, res) => {
    try{
        res.render('event');
    } catch(err){
        res.status(500).json(err);
    }
});

router.post('/event', async (req, res) => {
    try {
        const newEvent = await Event.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newEvent);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
