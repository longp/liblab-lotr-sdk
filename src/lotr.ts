import ApiClient from "./client";
import BookService from "./services/book";
import ChapterService from "./services/chapter";
import CharacterService from "./services/character";
import MovieService from "./services/movie";
import QuoteService from "./services/quote";

export default class LotR {
    private apiClient: ApiClient;
    book: BookService;
    chapter: ChapterService;
    character: CharacterService;
    movie: MovieService;
    quote: QuoteService;

    constructor(private apiKey?: string) {
        if(!apiKey) console.warn('Some Endpoints maybe unavailable with no api key')
        this.apiClient = new ApiClient(apiKey)
        this.book = new BookService(this.apiClient)
        this.chapter = new ChapterService(this.apiClient)
        this.character = new CharacterService(this.apiClient)
        this.movie = new MovieService(this.apiClient)
        this.quote = new QuoteService(this.apiClient)
    }
}