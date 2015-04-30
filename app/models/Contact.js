var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Contact = new Schema({
    fullname: 'String',
    company: 'String',
    phone: 'String',
    email: 'String',
    project: 'String',
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', Contact);
