'use strict';

/**
 * Is the object of the same type and equivalent to the result?
 * Similar to ===, but uses object-defined equality method.
 */
function chaiOEqual(chai, utils) {
    var Assertion = chai.Assertion;

    function oequal(result, method) {
        // The name given as an argument overrides the module's default.
        if (method === undefined) {
            method = chaiOEqual.method;
        }
        // Object not having the named method is likely a misconfiguration.
        if (this._obj[method] === undefined) {
            throw new Error("Object has no " + method + "() method.");
        }
        this.assert(
            this._obj.constructor === result.constructor &&
                this._obj[method](result),
            "expected #{act} to be the same as #{exp}",
            "expected #{act} not to be the same as #{exp}",
            result.toString(),
            this._obj.toString());
    }

    Assertion.addMethod('oequal', oequal);
    Assertion.addMethod('oequals', oequal);
    Assertion.addMethod('oeq', oequal);
}

// The default equality method name.
chaiOEqual.method = 'equals';


// Node / CommonJS.
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = chaiOEqual;
// AMD / RequireJS.
} else if (typeof define === 'function' && define.amd) {
    define(function() { return chaiOEqual; });
// Globals / <script>.
} else {
    chai.use(chaiOEqual);
}
