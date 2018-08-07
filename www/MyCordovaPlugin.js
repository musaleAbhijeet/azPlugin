


var exec = require('cordova/exec');

var PLUGIN_NAME = 'MyCordovaPlugin'



var MyCordovaPlugin = {
    echo: function (phrase, cb) {
        exec(cb, PLUGIN_NAME, 'echo', [phrase])
    },


    login: function (appUrl, loginType) {
        exec(appUrl, PLUGIN_NAME, 'login', loginType)
    },


    getTable: function (phrase, cb) {
        exec(cb, PLUGIN_NAME, 'getTableData', [phrase])
    },

    insertInToTable: function (appUrl, loginType) {
        exec(appUrl, PLUGIN_NAME, 'insertInToTable', loginType)
    },

    deleteData: function (appUrl, loginType) {
        exec(appUrl, PLUGIN_NAME, 'deleteData', loginType)
    },


}
module.exports = MyCordovaPlugin;
