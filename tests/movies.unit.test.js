const sinon = require('sinon')
const { expect } = require('chai')
const { Movie } = require('../src/models')
const { createMovie } = require('../src/controllers/moviesController')

describe('Movies', () => {
    it('should create a Movie', async () => {
        const createMovieStub = sinon.stub(Movie, 'create')
        const mockMovie = { title: 'Star Wars', genre: 'Sci-Fi' }
        createMovieStub.resolves(mockMovie)

        const req = { body: {} }

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy((data) => {
                expect(data).to.deep.equal(mockMovie)
            })
        }

        await createMovie(req, res)

        expect(createMovieStub.calledOnceWith(req.body)).to.be.true

        expect(res.status.calledOnceWith(201)).to.be.true

        createMovieStub.restore()
    })
})