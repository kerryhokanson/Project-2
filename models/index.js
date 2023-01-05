const User = require('./user');
const Event = require('./event');

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Event };