// Tests for the add.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import add from '../src/add.js';

// Tests created for add.js function
describe('add.js', function() {

    // Adding two positive numbers
    it('add.js: two positive numbers', function() {
      expect(add(1,2)).to.equal(3);
    })

});
