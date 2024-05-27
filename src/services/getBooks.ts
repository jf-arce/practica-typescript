import { BookSearch } from "../vite-env";

export const getBooks = async(query: string) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&key=${import.meta.env.VITE_API_KEY}`;
    
    const res = await fetch(url,{
        method: 'GET'
    });
    const books = await res.json() as BookSearch;

    console.log(books);
    return books;
}

