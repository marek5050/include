var should = require('chai').should();
include = require('../index')(__dirname);

describe('#include', function(){
    it('should include "helloWorld.js" ', function(){
        include("helloWorld").should.equal('helloWorld');
    })

    it('should include "B.js" which is "helloWorld" ', function(){
        include("A").should.equal('helloWorld');
    })
})