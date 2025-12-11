// AI-assisted tests for add.js
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {

    it('adds two positive numbers', () => {
      expect(add(6, 4)).to.equal(10);
    });
  
    it('adds a positive and a negative number', () => {
      expect(add(6, -4)).to.equal(2);
    });
  
    it('adds two negative numbers', () => {
      expect(add(-3, -7)).to.equal(-10);
    });
  
    it('returns augend when addend is undefined (default = 0)', () => {
      expect(add(5)).to.equal(5);
    });
  
    it('returns addend when augend is undefined (default = 0)', () => {
      expect(add(undefined, 5)).to.equal(5);
    });
  
    it('returns 0 when both args are undefined', () => {
      expect(add()).to.equal(0);
    });
  
    it('adds floating-point numbers (with precision handling)', () => {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
    });
  
    it('handles NaN inputs correctly', () => {
      expect(add(NaN, 5)).to.be.NaN;
      expect(add(5, NaN)).to.be.NaN;
    });
  
    it('handles Infinity', () => {
      expect(add(Infinity, 1)).to.equal(Infinity);
      expect(add(-Infinity, -1)).to.equal(-Infinity);
    });
  });