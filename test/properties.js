const chai = require('chai')
const { expect } = chai

const Mtrx = require('mtrx')


describe('Properties', () => {
    it('should create a matrix with custom expression', () => {
        const matrix = new Mtrx(2, 3, (i, j) => (i === j) ? 1 : 0)
        const expected = [[1, 0, 0], [0, 1, 0]]
        expect(matrix).to.deep.equal(expected)
    })

    it('should calculate the number of rows and columns', () => {
        const matrix = new Mtrx([
            [1, 2, 0],
            [3, 4, 4],
            [5, 6, 3]
        ])
        expect(matrix.rows).to.equal(3)
        expect(matrix.cols).to.equal(3)
    })

    it('should calculate the determinant correctly', () => {
        const matrix1 = new Mtrx(2, 3, (i, j) => (i === j) ? 1 : 0)
        const matrix2 = new Mtrx([
            [1, 2, 0],
            [3, 4, 4],
            [5, 6, 3]
        ])

        expect(matrix1.det).to.be.NaN
        expect(matrix2.det).to.equal(10)
    })

    it('should calculate the rank correctly', () => {
        const matrix = new Mtrx(2, 3, (i, j) => (i === j) ? 1 : 0)
        expect(matrix.rank).to.equal(2)

        matrix[0][0] = 0
        expect(matrix.rank).to.equal(1)
    })
})
