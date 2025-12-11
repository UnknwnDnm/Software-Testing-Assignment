// Tests for the words.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import words from '../src/words.js';

// Tests for words.js function
describe('words.js', function() {

    // Basic string
    it('words.js: normal sentence', function() {
        expect(words("how are")).to.deep.equal(["how", "are"]);
    });

    // punctuation handling
    it('words.js: punctuation removed', function() {
        expect(words("apple,. banana, & pear"))
        .to.deep.equal(["apple", "banana", "pear"]);
    })

    // Multiple spaces
    it('words.js: multiple spaces between words', function() {
        expect(words("Hello   world       test")).to.deep.equal(["Hello", "world", "test"]);
    });

    // Empty string
    it('words.js: empty string', function() {
        expect(words("")).to.deep.equal([]);
    });

    // Only spaces
    it('words.js: spaces only', function() {
        expect(words("     ")).to.deep.equal([]);
    });

});