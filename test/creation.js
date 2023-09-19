const chai = require('chai')
const { expect } = chai

const Mtrx = require('mtrx')


describe('Creation', () => {
    it('should create a 1x1 matrix if there is no arguments', () => {
        const matrix = new Mtrx()
        expect(matrix).to.have.lengthOf(1)
        expect(matrix[0]).to.have.lengthOf(1)
    })

    it('should create a 2x2 matrix', () => {
        const matrix = new Mtrx(2)
        expect(matrix).to.have.lengthOf(2)
        expect(matrix[0]).to.have.lengthOf(2)
        expect(matrix[1]).to.have.lengthOf(2)
    })

    it('should create a 2x3 matrix with value 9', () => {
        const matrix = new Mtrx(2, 3, 9)
        expect(matrix).to.deep.equal([[9, 9, 9], [9, 9, 9]])
    })

    it('should create a matrix from a 2D array', () => {
        const matrix = new Mtrx([[1, 2, 3], [4, 5, 6]])
        expect(matrix).to.deep.equal([[1, 2, 3], [4, 5, 6]])
    })
})
