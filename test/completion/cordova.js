var util = require("./../util");

exports['test CordovaJS completion'] = function() {
  
  // Completion for cordova object
  util.assertCompletion("cor", {
	"start":{"line":0,"ch":0},
	"end":{"line":0,"ch":3},
	"isProperty":false,
	"isObjectKey":false,
	"completions":[{"name":"cordova","type":"cordova","origin":"cordovajs"}]
  });
  
}