// Tests for the add.js functions.
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import add from '../src/add.js';

// Tests created for add.js function
describe('add.js', function() {

  // Part 1 tests:

  // unit_ADD_01, add two positive integers
  it('add.js: add two positive integers', function() {
    expect(add(5, 10)).to.equal(15);
  });

  // unit_ADD_02, add positive and negative number
  it('add.js: add positive and negative number', function() {
    expect(add(8, -3)).to.equal(5);
  });

  // unit_ADD_03, add floating point values
  it('add.js: add floating point values', function() {
    expect(add(2.5, 1.2)).to.equal(3.7);
  });

  // unit_ADD_04, add numeric strings
  it('add.js: add numeric strings', function() {
    expect(add("4", "3")).to.equal("43");
  });

  // unit_ADD_05, add with invalid input null
  it('add.js: add null and number', function() {
    expect(add(null, 5)).to.equal(5);
  });

  // unit_ADD_06, add undefined and number
  it('add.js: add undefined and number', function() {
    expect(add(undefined, 10)).to.equal(10);
  });

  // unit_ADD_07, add two undefined
  it('add.js: add two undefined values', function() {
    expect(add(undefined, undefined)).to.equal(0);
  });

  // unit_ADD_08, add integer and string
  it('add.js: add integer and string', function() {
    expect(add(5, "asd")).to.equal("5asd");
  });

  // Extra tests

  // add null + null
  it('add.js: add null and null', function() {
    expect(add(null, null)).to.equal(0);
  });

  // add negative floats
  it('add.js: add negative float', function() {
    expect(add(-2.5, -1.5)).to.equal(-4.0);
  });

  // add number and NaN
  it('add.js: add number and NaN', function() {
    expect(add(10, NaN)).to.be.NaN;
  });

  // Add large integers
  it('add.js: add large integers', function() {
    expect(add(1000000000, 2000000000)).to.equal(3000000000);
  });

});
