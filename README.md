# The Lord Of The Rings SDK
# Installation
```
npm i longphan-lotr-sdk
```
# Initialization
```
import { LotR } from "longphan-lotr-sdk";

const lotr = new LotR(<YOUR_API_KEY>);
```
# Usage
The Following resources can be accessed from the [LOTR API](https://the-one-api.dev/documentation) and can be fetched directly from the sdk client:
- book
- movie
- character
- quote
- chapter

To fetch all items of a particular item type:
```
lotr.<RESOURCE>.getAll()

/* EXAMPLE */
const books = await lotr.book.getAll()
```
To fetch a single item by id:
```
lotr.<RESOURCE>.getById(<RESOURCE ID>)

/* EXAMPLE */
const character = await lotr.character.getById(<RESOURCE ID>)
```

The following resources also have additional methods:
## Books
- Fetch all chapters of a specific book by ID
> `lotr.book.getChapters(<BOOK_ID>)`
## Characters
- Fetch all quotes from a specific character by ID
> `lotr.character.getQuotes(<CHARACTER_ID>)`
## Characters
- Fetch all quotes from a specific movie by ID
> `lotr.movie.getQuotes(<MOVIE_ID>)`

# Query Parameters
According to the [LOTR API](https://the-one-api.dev/documentation),you can sort, paginate and filter the data. You can supply the sdk with a second parameter with an object that looks liek this 
```
{
    limit:1,
    page:1,
    offset:1,
    sort: {
        by:"string",
        order: "asc"
    }
    filter: {
    match:{
        field:"string",
        value:"string"
    },
    negmatch:{
        field:"string",
        value:"string"
    },
    include:{
        field:"string",
        value:["string"]
    },
    exclude:{
        field:"string",
        value:["string"]
    },
    exists:"string",
    nonexists:"string",
    regex:{
        field:"string",
        regex:"string",
        match:true
    },
    lesser:{
        field:"string",
        value:"string",
        includeEqual:true
    },
    greater:{
        field:"string",
        value:"string"
        includeEqual:true
    },
}
```
/* EXAMPLE */
```
lotr.book.getAll({
    limit:11,
})
