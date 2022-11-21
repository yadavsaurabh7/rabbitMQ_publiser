var pushNotification = require('./pushNotification.js')
const userHelper =  {};
userHelper.appUpdate = function(data){
    if(data.os_type=='IOS'){
        query = {os_type : 'IOS'}
    }
    if(data.os_type=='Android'){
        query = {os_type : 'Android'}
    }
    if(data.os_type=='ALL'){
        query = {}
    }
    User.find(query).then(users => {
        users.array.forEach(element => {
            if(element.os_type=='IOS'){
                console.log(element.name);
               // pushNotification.apnPushNotification();
            }else{
               // pushNotification.fcmPushNotification();
            }
        });
    });
}
module.exports = userHelper;
