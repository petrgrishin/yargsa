/* global describe, it */

const yargsa = require('./')
const { expect } = require('chai')

describe('yargsa', () => {
  it('has a test', () => {
    expect(yargsa).to.be.eql({})
  })
})
