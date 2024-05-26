import { BookSearch } from "../vite-env";

export const getBooks = async(query: string) => {
    const url = `https://openlibrary.org/search.json?title=${query}`;
    
    const res = await fetch(url,{
        method: 'GET'
    });
    const data = await res.json() as BookSearch;

    return data;
}