// Tests for the toNumber.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

// Tests for toNumber.js function
describe('toNumber.js', function() {

    // Numeric strings
    it('toNumber.js: numeric string', function() {
        expect(toNumber("10")).to.equal(10);
    });

    // Boolean true
    it('toNumber.js: boolean true', function() {
        expect(toNumber(true)).to.equal(1);
    });

    // Boolean false
    it('toNumber.js: boolean false', function() {
        expect(toNumber(false)).to.equal(0);
    });

    // null
    it('toNumber.js: null value', function() {
        expect(toNumber(null)).to.equal(0);
    });

    // undefined
    it('toNumber.js: undefined value', function() {
        expect(toNumber(undefined)).to.be.NaN;
    });

    // Empty array
    it('toNumber.js: empty array', function() {
        expect(toNumber([])).to.equal(0);
      });

});
