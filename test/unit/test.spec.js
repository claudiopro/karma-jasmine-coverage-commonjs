var test = require('../../src/js/test');

describe('the test object', function() {
	it('is defined', function() {
		expect(test).toBeDefined();
	});
	
	it('has a method foo()', function() {
		expect(test.foo).toBeDefined();
		expect(test.foo).toEqual(jasmine.any(Function));
	});
	
	it('the return value of foo() has a method bar()', function() {
		expect(test.foo()).not.toBeNull();
		expect(test.foo().bar).toEqual(jasmine.any(Function));
	});
	
	it('the return value of foo().bar() is 1', function() {
		expect(test.foo().bar()).toEqual(1);
	});
});
