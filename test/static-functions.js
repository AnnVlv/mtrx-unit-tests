const chai = require('chai')
const { expect } = chai

const Mtrx = require('mtrx')


describe('Static functions', () => {
    it('should create a matrix of zeros', () => {
        const matrix = Mtrx.zeros(3, 3)
        const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        expect(matrix).to.deep.equal(expected)
    })

    it('should create a matrix of ones', () => {
        const matrix = Mtrx.ones(3, 4)
        const expected = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
        expect(matrix).to.deep.equal(expected)
    })
    
    it('should create a diagonal matrix', () => {
        const matrix = Mtrx.diag([2, 4, 6])
        const expected = [[2, 0, 0], [0, 4, 0], [0, 0, 6]]
        expect(matrix).to.deep.equal(expected)
    })
    
    it('should check if an object is a matrix', () => {
        const nonMatrix = [[0, 1, 2], [1, 2, 3]]
        const matrix = new Mtrx(nonMatrix)
        expect(Mtrx.isMtrx(nonMatrix)).to.be.false
        expect(Mtrx.isMtrx(matrix)).to.be.true
    })
    
    it('should check if an object is matrix-like', () => {
        const matrixLike = [[0, 1, 2], [1, 2, 3]]
        expect(Mtrx.isMtrxLike(matrixLike)).to.be.true
    })
    
    it('should check if a matrix is diagonal', () => {
        const matrix = new Mtrx([[1, 0, 0], [0, 2, 0], [0, 0, 3]])
        expect(Mtrx.isDiag(matrix)).to.be.true
    })

    it('should add two matrices', () => {
        const matrix1 = new Mtrx([[1, 0], [0, 1]])
        const matrix2 = new Mtrx([[2, 3], [4, 5]])
        const result = Mtrx.add(matrix1, matrix2)
        const expected = [[3, 3], [4, 6]]
        expect(result).to.deep.equal(expected)
    })
    
    it('should multiply a matrix by a scalar', () => {
        const matrix = new Mtrx([[1, 2], [3, 4]])
        const result = Mtrx.mul(matrix, 3)
        const expected = [[3, 6], [9, 12]]
        expect(result).to.deep.equal(expected)
    })
})
