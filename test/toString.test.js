// Tests for the toString.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import toString from '../src/toString.js';

// Tests for toString.js function
describe('toString.js', function() {

    // Numbers
    it('toString.js: converts number to string', function() {
        expect(toString(123)).to.equal("123");
    });


    // Arrays
    it('toString.js: converts array of numbers', function() {
        expect(toString([1, 2, 3])).to.equal("1,2,3");
    });

    // Boolean true
    it('toString.js: converts true to string', function() {
        expect(toString(true)).to.equal("true");
    });

    // Objects
    it('toString.js: converts object to string', function() {
        expect(toString({a:1})).to.equal("[object Object]");
    });

    // test special case -0
    it('toString.js: special case -0', function() {
        expect(toString(-0)).to.equal('-0');
      });
      
});