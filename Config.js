
var HtmlReporter = require('protractor-beautiful-reporter');
var retry = require('protractor-retry').retry;
//seleniumAddress: 'http://localhost:4444/wd/hub'
exports.config = {
		
		suites: {
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		
		  },
		  

		
		  capabilities: {
			  
			  loggingPrefs: {
				    browser: 'ALL' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
				  },
			    'browserName': 'chrome' ,
			    'goog:chromeOptions': {
				    w3c: false
				    //'args': ['incognito']
				    }
		  
		  
			    },


			jasmineNodeOpts: {
				defaultTimeoutInterval: 2500000
				},
onCleanUp: function (results) {
	retry.onCleanUp(results);
},
				
			
onPrepare : function()
{
	
	browser.waitForAngularEnabled(false);
	browser.driver.manage().window().maximize();
	 retry.onPrepare();
	jasmine.getEnv().addReporter(new HtmlReporter({
    baseDirectory: 'Reports/screenshots'
 }).getJasmine2Reporter());
	


	
},
afterLaunch: function() {
	return retry.afterLaunch(2);
	
}
				


 };
