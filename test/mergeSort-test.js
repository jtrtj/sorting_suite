const assert = require('chai').assert
const mergeSort = require('../mergeSort')

describe('merge functionality', function() {
  context('merge function', function() {
    it('it can compare two arrays values and return sorted merged array', function() {
      assert.deepEqual(merge([2,0],[3,1]), [0,1,2,3])
    })
  })
})