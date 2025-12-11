// Tests for the upperFirst.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

// Tests for upperFirst.js function
describe('upperFirst.js', function() {

    // Lowercase word
    it('upperFirst.js: lowercase word', function() {
        expect(upperFirst("hello")).to.equal("Hello");
    });

    // already uppercase
    it('upperFirst.js: already uppercase first letter', function() {
        expect(upperFirst("Hello")).to.equal("Hello");
    });

    // all uppercase
    it('upperFirst.js: all lowercase', function() {
        expect(upperFirst("HELLO")).to.equal("HELLO");
      });

    // empty string
    it('upperFirst.js: empty string', function() {
        expect(upperFirst("")).to.equal("");
    });

    // only one char
    it('upperFirst.js: first lowercase', function() {
        expect(upperFirst('a')).to.equal('A');
      });

    // starting with symbol
    it('upperFirst.js: starting with symbol', function() {
        expect(upperFirst("#hello")).to.equal("#hello");
    });

});