// Tests for the eq.js function
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import eq from '../src/eq.js';

// Tests created for eq.js function
describe('eq.js', function() {

    // Comparing the same object
    it('eq.js: same object', function() {
        const object = { 'a': 1 };
        expect(eq(object, object)).to.equal(true);
    });

    // Comparing two different objects with same content
    it('eq.js: different objects with same content', function() {
        const object1 = { 'a': 1 };
        const object2 = { 'a': 1 };
        expect(eq(object1, object2)).to.equal(false);
    });

    // Comparing two identical strings
    it('eq.js: identical strings', function() {
        expect(eq('a', 'a')).to.equal(true);
    });

    // Comparing primitive string vs object string
    it('eq.js: primitive string vs String object', function() {
        expect(eq('a', Object('a'))).to.equal(true);
    });

    // Comparing NaN with NaN
    it('eq.js: NaN compared to NaN', function() {
        expect(eq(NaN, NaN)).to.equal(true);
    });

});

