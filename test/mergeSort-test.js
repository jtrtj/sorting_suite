const assert = require('chai').assert;
const sorter = require('../mergeSort');

describe('mergeSort functionality', function() {
  context('merge function', function() {
    it('it can merge two sorted arrays', function() {
      assert.deepEqual(sorter.merge([0,5],[1,3]), [0,1,3,5])
      assert.deepEqual(sorter.merge([0],[1]), [0,1])
    })
  })

  context('mergeSort function', function() {
    it('it can merge sort a list of values', function() {
      assert.deepEqual(sorter.mergeSort([2,0,1,3]), [0,1,2,3])
    })
  })
})