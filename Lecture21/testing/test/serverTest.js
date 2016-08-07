/**
 * Created by championswimmer on 07/08/16.
 */
const assert = require('assert');

const server = require('../server');

describe('server tests', function () {
    describe('calcfare()', function () {
        it('return fare from distance and time', function () {
            assert.equal(server.calcfare(3,16), 34)
            assert.equal(server.calcfare(1,16), 26)
            assert.equal(server.calcfare(1,14), 25)
            assert.equal(server.calcfare(3,14), 33)
        })
    })
});