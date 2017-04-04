'use strict';

module.exports = function() {
    var loggieServer = function() {
        var me = this;
        return me;
    };

    loggieServer.globalText = "Test";
    loggieServer.dynamicText;    // to be set via mockContext for testing purpose later

    return loggieServer;
};
