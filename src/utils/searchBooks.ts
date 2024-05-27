import { getBooks } from '../services/getBooks.ts'
import { createBooksCards } from '../components/createBookCards.ts';
import { booksLoader } from './booksLoader.ts';

export function searchBooks(booksContainer: HTMLDivElement, search: HTMLInputElement){
    search.addEventListener("change", ()=>{
        booksLoader(booksContainer);
        getBooks(search.value).then(books => {
            booksContainer.innerHTML = createBooksCards(books.items);
        })
    })
}

