// Tests for the isDate.js function
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import isDate from '../src/isDate.js';

// Tests created for isDate.js function
describe('isDate.js', function() {

    // A real Date object
    it('isDate.js: a Date object', function() {
        expect(isDate(new Date())).to.equal(true);
    });

    // A date string should not be considered a Date object
    it('isDate.js: a date string', function() {
        expect(isDate('Mon April 23 2012')).to.equal(false);
    });

    // A plain object is not a Date
    it('isDate.js: a plain object', function() {
        expect(isDate({})).to.equal(false);
    });

    // A number is not a Date
    it('isDate.js: a number', function() {
        expect(isDate(12345)).to.equal(false);
    });

    // Null should not be considered a Date
    it('isDate.js: null', function() {
        expect(isDate(null)).to.equal(false);
    });

    // Undefined should not be considered a Date
    it('isDate.js: undefined', function() {
        expect(isDate(undefined)).to.equal(false);
    });

});
