"use strict";
module.exports = function(value){
	return require('lodash.flatten')(value)
}
module.exports.extensionType = 'action'