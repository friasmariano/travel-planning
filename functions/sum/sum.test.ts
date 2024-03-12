import sum from '@/functions/sum/sum'

// const sum = require('../functions/sum')

describe('sum', () => {
    it('makes the addition operation of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    })
});

 module.exports = sum;