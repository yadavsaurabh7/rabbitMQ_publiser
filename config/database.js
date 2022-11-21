const mongoose = require('mongoose');
const constant = require('./constants');

mongoose.Promise = global.Promise;
const connect = () => mongoose.connect(constant.DATABASE_URL,{useNewUrlParser: true});
module.exports.connect = connect;
module.exports.mongoose = mongoose;