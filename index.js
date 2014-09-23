var util = require('util');

var TEMPLATE = '' +
  'window.__json__ = window.__json__ || {};\n' +
  'window.__json__[\'%s\'] = \'%s\'';

var escapeContent = function(content) {
  return content.replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
};

var responses = [];

var createJsonPreprocessor = function(logger, basePath) {
  var log = logger.create('preprocessor.json');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    if(file.path.indexOf('configuration.js') !== -1){
      var arr = content.match(/\[\{[0-9a-zA-Z:;,\{\}\[\t \n\"\'\\\/\.]*\}\]/);
      arr = eval(arr[0]);
      log.info(arr[0]);
    } else {
      
    }
    var htmlPath = file.originalPath.replace(basePath + '/', '');

    file.path = file.path + '.js';
    done(util.format(TEMPLATE, htmlPath, escapeContent(content)));
  };
};

createJsonPreprocessor.$inject = ['logger', 'config.basePath'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:json': ['factory', createJsonPreprocessor]
};