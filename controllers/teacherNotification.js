var test = {};
const constants = require('../config/constants');
const commonHelper = require('../helpers/commonHelper');
//var pushNotificationHelper = require('../helpers/pushNotificationHelper');
const uuidv1 = require('uuid/v1');
var producer = require('../helpers/producer');
const teacherNotification = {};


teacherNotification.notification = function(req, res){
    let type = req.params.type;
    var work = req.body;
    let message = {
        type: type,
        payload: work
    }
    producer.pushNotificationChannel.sendToQueue(constants.pushNotificationQueue, commonHelper.encode(message), {
        persistent: true
    });
    res.send({"message": "Sending in Process"})
}
teacherNotification.bulkNotification = function(req, res){
    let type = req.params.type;
    var work = req.body;
    let message = {
        type: type,
        payload: work
    }
    producer.pushNotificationChannel.sendToQueue(constants.bulkPushNotificationQueue, commonHelper.encode(message), {
        persistent: true
    });
    res.send({"message": "Sending in Process"})
}
teacherNotification.email = function(req, res){
    let type = req.params.type;
    var work = req.body;
    let message = {
        type: type,
        payload: work
    }
    producer.emailChannel.sendToQueue(constants.emailQueue, commonHelper.encode(message), {
        persistent: true
    });
    res.send({"message": "Sending in Process"})
}
teacherNotification.bulkEmail = function(req, res){
    let type = req.params.type;
    var work = req.body;
    let message = {
        type: type,
        payload: work
    }
    producer.bulkEmailChannel.sendToQueue(constants.bulkEmailQueue, commonHelper.encode(message), {
        persistent: true
    });
    res.send({"message": "Sending in Process"})
}
module.exports = teacherNotification;