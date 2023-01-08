const router = require('express').Router();
const { User, Event } = require('../models');

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
        console.log(err)
        res.status(400).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try{
        res.render('signup');
    } catch(err){
        res.status(500).json(err);
    }
});

router.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
      console.log(user);
      res.render('/calendar');
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  });

module.exports = router;
