const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("twoSum returns an empty array if no 2 numbers within the array of numbers passed add up to the target value", () => {
    expect(twoSum([1, 2], 4)).to.eql([]);
  });
  it("twoSum finds two distinct elements that sum up to a target and return their indices in an array", () => {
    expect(twoSum([1, 2, 3], 5)).to.eq([1, 2]);
  });
});
