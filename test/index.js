var should = require('chai').should();
just_include = require('../index')(__dirname);

describe('#include(__dirname)', function(){
    it('should include "A" which is Hello ', function(){
        just_include("A").should.equal('Hello');
    })

    it('should include "B.js" which is "World" ', function(){
        just_include("B").should.equal('World');
    })

    it('should include "helloWorld.js" which prints "Hello World"', function(){
        var a = just_include("helloWorld");
        a().should.equal("Hello World");
    })
})