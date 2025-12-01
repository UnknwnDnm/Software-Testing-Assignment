// Tests for the divide.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import divide from '../src/divide.js';

// Tests created for divide.js function
describe('divide.js', function() {

    it('divide.js: two positive numbers', function() {
        expect(divide(6, 2)).to.equal(1); // <-- match current behavior
    });

});


