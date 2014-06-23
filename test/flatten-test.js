"use strict";
// Import
var expect = require('chai').expect,
	joe = require('joe')

// Test
joe.describe('flatten plugin', function(describe,it){
	var Chainy = require('chainy-core').subclass().require('set').addExtension('flatten', require('../'))

	it("should work", function(next){
		Chainy.create()
			.set([1, [2], [3, [[4]]]])
			.flatten()
			.done(function(err, result){
				if (err)  return next(err)
				expect(result).to.deep.equal([1, 2, 3, 4])
				return next()
			})
	})
})