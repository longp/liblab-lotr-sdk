import LotR from "../lotr";

import dotenv from "dotenv"
dotenv.config()

describe('Test movie service functionality', () => {
    const lotr = new LotR(process.env.APIKEY)


    test('Get all movies and check properties', async () => {
        const movies = await lotr.movie.getAll()
        expect(movies).toHaveProperty('docs')
        expect(movies).toHaveProperty('total')
        expect(movies).toHaveProperty('limit')
        expect(movies).toHaveProperty('offset')
        expect(movies).toHaveProperty('page')
        expect(movies).toHaveProperty('pages')
        expect(movies.docs[0]).toHaveProperty('_id')
        expect(movies.docs[0]).toHaveProperty('name')
        expect(movies.docs[0]).toHaveProperty('rottenTomatoesScore')

    });

    test('Get only 2 movies with limit', async () => {
        const movies = await lotr.movie.getAll({
            limit:2
        })
        expect(movies).toHaveProperty('docs')
        expect(movies).toHaveProperty('total')
        expect(movies).toHaveProperty('limit')
        expect(movies).toHaveProperty('offset')
        expect(movies).toHaveProperty('page')
        expect(movies).toHaveProperty('pages')
        expect(movies.docs).toHaveLength(2)
        expect(movies.docs[0]).toHaveProperty('_id')
        expect(movies.docs[0]).toHaveProperty('name')
        expect(movies.docs[0]).toHaveProperty('rottenTomatoesScore')

    });

    test('Get movies with filter', async () => {
        const movies = await lotr.movie.getAll({
            filter:{
                match:{
                    field:'name',
                    value:'The Lord of the Rings Series'
                }
            }
        })
        expect(movies).toHaveProperty('docs')
        expect(movies).toHaveProperty('total')
        expect(movies).toHaveProperty('limit')
        expect(movies).toHaveProperty('offset')
        expect(movies).toHaveProperty('page')
        expect(movies).toHaveProperty('pages')
        expect(movies.docs).toHaveLength(1)
        expect(movies.docs[0]).toHaveProperty('_id')
        expect(movies.docs[0]).toHaveProperty('name')
        expect(movies.docs[0]).toHaveProperty('rottenTomatoesScore')
        expect(movies.docs[0].name).toBe('The Lord of the Rings Series')

    });


    test('Get single movie by id', async () => {
        const movie = await lotr.movie.getById("5cd95395de30eff6ebccde56")
        expect(movie.docs).toHaveLength(1)
        expect(movie.docs[0].name).toBe('The Lord of the Rings Series')
        expect(movie.docs[0].rottenTomatoesScore).toBe(94)

    })

    test('Get all quotes in a movie', async () => {
        const quotes = await lotr.movie.getQuotes('5cd95395de30eff6ebccde5d')
        expect(quotes.docs).toHaveLength(872)
        expect(quotes.docs[0]._id).toBe('5cd96e05de30eff6ebcce7e9')
    })

});
