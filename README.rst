===========
chai-oequal
===========

`Chai <http://chaijs.com/>`_ plugin that defines an `oequal()` method for
objects with a custom equality notion.

Overview
--------

Suppose your objects know how to compare themselves:

.. code:: javascript

     function A() {}
     A.prototype.equals = function(other) { return true; }

Then you may shorten the following:

.. code:: javascript

     a1.should.be.an.instanceof(A);
     a1.equals(a2).should.be.true;

as:

.. code:: javascript

     a1.should.oequal(a2);

Installation and usage
----------------------

Install using `npm <https://www.npmjs.com/>`_:

.. code:: bash

    npm install chai-oequal --save-dev

And use with `Node.js <https://nodejs.org/>`_:

.. code:: javascript

    var chai = require('chai'),
        oequal = require('oequal');
    chai.use(oequal);

You may also load the plugin with a `script` tag or using `define()`.

To change the default method name called to check objects equality:

.. code:: javascript

    oequal.method = 'isSame';  // Defaults to 'equals'.

Or to override it for a single test:

.. code:: javascript

    b1.should.oequal(b2, 'isSame');
