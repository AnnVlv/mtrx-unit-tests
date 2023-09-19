const chai = require('chai')
const { expect } = chai

const Mtrx = require('mtrx')


describe('Methods', () => {
    it('should add two matrices', () => {
        const matrix1 = new Mtrx([[1, 0], [0, 1]])
        const matrix2 = new Mtrx([[2, 3], [4, 5]])
        matrix1.add(matrix2)
        const expected = [[3, 3], [4, 6]]
        expect(matrix1.values).to.deep.equal(expected)
    })

    it('should map the matrix using a function', () => {
        const matrix = new Mtrx(3, 3, (i, j) => i + j)
        matrix.mapMtrx((i, j, n) => i + j + n)
        const expected = [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
        expect(matrix.values).to.deep.equal(expected)
    })

    it('should transpose the matrix', () => {
        const matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        matrix.T()
        const expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
        expect(matrix.values).to.deep.equal(expected)
    })

    it('should calculate the inverse of the matrix', () => {
        const matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        const inverse = matrix.inv()
        const expected = [[-1.2, -0.6, 0.8], [1.1, 0.3, -0.4], [-0.2, 0.4, -0.2]]
        expect(inverse.values).to.deep.equal(expected)
    })
})
