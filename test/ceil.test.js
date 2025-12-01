// Tests for the ceil.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import ceil from '../src/ceil.js';

// Tests created for ceil.js function
describe('ceil.js', function() {

    // Ceil a positive number with default precision
    it('ceil.js: positive number without precision', function() {
        expect(ceil(4.006)).to.equal(5);
    });

    // Ceil a positive number with 2 decimal precision
    it('ceil.js: positive number with 2 decimal precision', function() {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });

    // Ceil a positive number with negative precision
    it('ceil.js: positive number with negative precision', function() {
        expect(ceil(6040, -2)).to.equal(6100);
    });

});
