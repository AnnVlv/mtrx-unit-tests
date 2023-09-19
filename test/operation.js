const chai = require('chai')
const { expect } = chai

const Mtrx = require('mtrx')


describe('Operation', () => {
    it('should get a value at specified position', () => {
        const matrix = new Mtrx(2, 3, 0)
        const value = matrix[1][1]
        expect(value).to.equal(0)
    })

    it('should set a value at specified position', () => {
        const matrix = new Mtrx(2, 3, 0)
        matrix[0][1] = 1
        const expected = [[0, 1, 0], [0, 0, 0]]
        expect(matrix).to.deep.equal(expected)
    })

    it('should set a value at specified position using set method', () => {
        const matrix = new Mtrx(2, 3, 0)
        matrix.set(0, 1, 1)
        const expected = [[0, 1, 0], [0, 0, 0]]
        expect(matrix).to.deep.equal(expected)
    })
})
