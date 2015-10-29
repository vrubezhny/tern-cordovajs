exports['test CordovaJS completion'] = require('./completion/cordova');

if (require.main === module) require("test").run(exports);