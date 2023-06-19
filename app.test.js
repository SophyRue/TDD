

const chai = require ('chai')
import { describe, it } from 'mocha'

// Test cases for the addNumbers function

describe('addNumbers', () => {
  it('should return the sum of two numbers', () => {
    expect(addNumbers(2, 3)).to.equal(5);
    expect(addNumbers(-1, 5)).to.equal(4);
    expect(addNumbers(0, 0)).to.equal(0);
  });

});

it('should return NaN if one or both parameters are not numbers', () => {
    expect(addNumbers('2', 3)).to.be.NaN;
    expect(addNumbers(2, '3')).to.be.NaN;
    expect(addNumbers('a', 'b')).to.be.NaN;
  });

