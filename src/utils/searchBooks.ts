import { getBooks } from '../services/getBooks.ts'
import { createBooksCards } from '../components/createBookCards.ts';
import { createBooksSkeleton } from '../components/createBooksSkeleton.ts';

export function searchBooks(booksContainer: HTMLDivElement, search: HTMLInputElement){
    search.addEventListener("change", ()=>{
        booksContainer.innerHTML = `
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
        `;
        booksContainer.innerHTML += createBooksSkeleton();

        getBooks(search.value).then(books => {
            booksContainer.innerHTML = createBooksCards(books.items);
        })
    })
}

