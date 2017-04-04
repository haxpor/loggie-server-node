/**
 * @namespace loggieServer
 */

// -- loggie-server-node -- //
var loggieServer = require('./core/core.js')();

require('./core/core.util.js')(loggieServer);

module.exports = loggieServer;
// if it's in browser environment
var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
if (isBrowser()) {
    window.loggieServer = loggieServer;
}
