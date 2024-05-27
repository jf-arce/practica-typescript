import { BookSearch } from "../vite-env";


const API_KEY:string = "AIzaSyBu6WpkiW9vePxsiNktAGSgiQsO7sopoLI"

export const getBooks = async(query: string) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&key=${API_KEY}`;
    
    const res = await fetch(url,{
        method: 'GET'
    });
    const books = await res.json() as BookSearch;


    console.log(books);
    return books;
}

