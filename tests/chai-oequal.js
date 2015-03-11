'use strict';

// Chai will be defined by Karma.
var oequal = require('chai-oequal');
chai.use(oequal);


// A class that knows how to compare instances.
function A(id, data) {
    this.id = id;
    this.data = data;
}

A.prototype.equals = function(other) {
    return this.id === other.id;
};


// A subclass of A.
function B(id, data) {
    A.call(this, id, data);
}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;


// A class with a different equality method.
function C(id, data) {
    this.id = id;
    this.data = data;
}

C.prototype.isSame = function(other) {
    return this.id === other.id;
};


var a11 = new A(1, 'a11'),
    a12 = new A(1, 'a12'),
    a2 = new A(2, 'a2'),
    b = new B(1, 'b'),
    c = new C(1, 'c');


describe("oequal()", function() {
    it("is true for the same object", function () {
        a11.should.oequal(a11);
    });

    it("is true for an equivalent object", function () {
        a11.should.oequal(a12);
    });

    it("is false for a non-equivalent object", function () {
        a11.should.not.oequal(a2);
    });

    it("is false for an object of a different class", function () {
        a11.should.not.oequal(b);
    });

    it("complains if the class does not define the method", function () {
        (function() { c.should.oequal(c); }).should.throw();
    });

    it("is aliased as oequals() and oeq()", function () {
        a11.should.oequals(a11);
        a11.should.oeq(a11);
    });

    it("the equality method may be overridden", function () {
        c.should.oequal(c, 'isSame');
    });

    it("the equality method may be changed globally", function () {
        oequal.method = 'isSame';
        c.should.oequal(c);
        oequal.method = 'equals';
    });
});
