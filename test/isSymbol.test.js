// Tests for the isSymbol.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import isSymbol from '../src/isSymbol.js';

// Tests for isSymbol.js function
describe('isSymbol.js', function() {

    // Symbol object
    it('isSymbol.js: symbol object', function() {
        expect(isSymbol(Symbol())).to.equal(true);
      });
    
    // String
    it('isSymbol.js: string value', function() {
        expect(isSymbol("abc")).to.equal(false);
    });


    // Number
    it('isSymbol.js: number', function() {
        expect(isSymbol(123)).to.equal(false);
    });

    // null
    it('isSymbol.js: null', function() {
        expect(isSymbol(null)).to.equal(false);
    });

});