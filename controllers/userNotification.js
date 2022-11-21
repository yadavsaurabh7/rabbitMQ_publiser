var test = {};
const constants = require('../config/constants');
const commonHelper = require('../helpers/commonHelper');
//var pushNotificationHelper = require('../helpers/pushNotificationHelper');
const uuidv1 = require('uuid/v1');
var producer = require('../helpers/producer');
const userNotification = {};


userNotification.notification = function(req, res){
    let type = req.params.type;
    var work = req.body;
    let message = {
        type: type,
        payload: work
    }
    producer.pushNotificationChannel.sendToQueue(constants.pushNotificationQueue, commonHelper.encode(message), {
        persistent: true
    });
}

userNotification.bulkNotification = function(req, res){
    let type = req.params.type;
    var work = req.body;
    let message = {
        type: type,
        payload: work
    }
    producer.pushNotificationChannel.sendToQueue(constants.pushNotificationQueue, commonHelper.encode(message), {
        persistent: true
    });
    res.send({"status_code":1,"message":"message sending in progress"});
}

module.exports = userNotification;