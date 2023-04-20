import LotR from "../lotr";

import dotenv from "dotenv"
dotenv.config()
describe('Test Book service functionality', () => {
    const lotr = new LotR(process.env.APIKEY)


    test('Get all books and check properties', async () => {
        const books = await lotr.book.getAll()
        expect(books).toHaveProperty('docs')
        expect(books).toHaveProperty('total')
        expect(books).toHaveProperty('limit')
        expect(books).toHaveProperty('offset')
        expect(books).toHaveProperty('page')
        expect(books).toHaveProperty('pages')
    });


    test('Get single book by id', async () => {
        const book = await lotr.book.getById("5cf58080b53e011a64671584")
        expect(book.docs).toHaveLength(1)
        expect(book.docs[0].name).toBe('The Return Of The King')
    })

    test('Get all chapters in a book', async () => {
        const chapters = await lotr.book.getChapters('5cf58080b53e011a64671584')
        expect(chapters.docs).toHaveLength(19)
        expect(chapters.docs[0].chapterName).toBe('Minas Tirith')
    })

});
