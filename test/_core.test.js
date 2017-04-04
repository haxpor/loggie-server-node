describe("loggie-server-node's core tests", function() {
    
    it("should have global text's value equal to 'test'", function() {
        expect(loggieServer.globalText).toEqual("Test");
    });

    it("should return 'Hello World' from returnHelloWorld function", function() {
        expect(loggieServer.util.returnHelloWorld()).toEqual("Hello World");
    });

    it("should validate promise-returned member function", function(done) {
    	loggieServer.util.returnPromise()
    		.then((result) => {
    			done();
    		}, (e) => {
    			console.log(e);
    		})
    });

    it("should have 'Dynamic Text' as value of dynamicText property", function() {
        expect(loggieServer.dynamicText).toEqual("Dynamic Text");
    });
});
