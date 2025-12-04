// AI-assisted tests for ceil.js
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil.ai.js', function() {

    // Negative numbers
    it('ceil.ai.js: negative number without precision', function() {
        expect(ceil(-4.3)).to.equal(-4);
    });

    // Decimal numbers with precision
    it('ceil.ai.js: decimal number with 3 decimal precision', function() {
        expect(ceil(1.2345, 3)).to.equal(1.235);
    });

    // Large number with negative precision
    it('ceil.ai.js: large number with negative precision', function() {
        expect(ceil(98765, -2)).to.equal(98800);
    });

    // Zero
    it('ceil.ai.js: zero with precision', function() {
        expect(ceil(0, 2)).to.equal(0);
    });

    // Small decimal number
    it('ceil.ai.js: very small decimal', function() {
        expect(ceil(0.00012, 5)).to.equal(0.00012);
    });

});