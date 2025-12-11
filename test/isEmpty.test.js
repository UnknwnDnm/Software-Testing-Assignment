// Tests for the isEmpty.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

// Tests for isEmpty.js function
describe('isEmpty.js', function() {

    // Empty object
    it('isEmpty.js: empty object ', function() {
        expect(isEmpty({})).to.equal(true);
    });

    // Number
    it('isEmpty.js: number', function() {
      expect(isEmpty(5)).to.equal(true);
    });

    // Empty array
    it('isEmpty.js: empty array', function() {
      expect(isEmpty([])).to.equal(true);
    });

    // array with values
    it('isEmpty.js: array with values', function() {
      expect(isEmpty([1,2])).to.equal(false);
    });

    // Empty map
    it('isEmpty.js: empty map', function() {
      const emap = new Map();
      expect(isEmpty(emap)).to.equal(true);
    });

    // map
    it('isEmpty.js: map', function() {
      const map = new Map([['a', 2]]);
      expect(isEmpty(map)).to.equal(false);
    });

    // Key pair
    it('isEmpty.js: key pair', function() {
      expect(isEmpty({a:2})).to.equal(false);
    });

    // undefined value
    it('isEmpty.js: undefined value', function() {
        expect(isEmpty(undefined)).to.equal(true);
    });

    // Empty Set
    it('isEmpty.js: empty set', function() {
        const s = new Set();
        expect(isEmpty(s)).to.equal(true);
    });

    // Set with values
    it('isEmpty.js: set with values', function() {
        const s = new Set([1]);
        expect(isEmpty(s)).to.equal(false);
    });

    // Empty value
    it('isEmpty.js: null value', function() {
        expect(isEmpty(null)).to.equal(true);
      });
  
});