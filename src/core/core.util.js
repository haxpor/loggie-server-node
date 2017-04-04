'use strict';

/**
 * loggieServer Util
 * @namespace loggieServer.util
 */
module.exports = function(loggieServer) {
    var util = loggieServer.util = {};

    /**
     * Return "Hello World" string
     * @return {String} "Hello World" string
     * @method returnHelloWorld
     * @memberOf loggieServer.util
     */
    util.returnHelloWorld = function() {
        return "Hello World";
    }

    /**
     * Return promise object with resolved result.
     * @return {Object} Promise object
     * @method  returnPromise
     * @memberOf loggieServer.util
     */
    util.returnPromise = function() {
    	return new Promise((resolve, reject) => {
    		return resolve("You did well");
    	});
    }

    /**
     * Return "Hay Hay" string
     * @return {String} "Hay Hay" string
     * @method  returnHayHay
     * @memberOf loggieServer.util
     */
    util.returnHayHay = function() {
    	return "Hay Hay Hay Hay";
    }
}
