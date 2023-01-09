const router = require('express').Router();
const userRoutes = require('./userRoutes');
const seedDatabase = require('../../seeds/seed.js')
router.get('/seed', (req, res) => {
    seedDatabase()
    res.json({message:"database seeded successfully"})
})
router.use('/users', userRoutes);


module.exports = router;