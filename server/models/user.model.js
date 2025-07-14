const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
        message: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('usersmsgcollections', userSchema);