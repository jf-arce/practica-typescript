import { getBooks } from '../services/getBooks.ts'

export function searchBooks(booksContainer: HTMLDivElement, search: HTMLInputElement){
    search.addEventListener("change", ()=>{
        booksContainer.innerHTML = `
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
        `;
        booksContainer.innerHTML += skeleton;

        getBooks(search.value).then(res => {
            const cardBook = res.docs.map(book => {
            return `
                <div class="flex gap-5 bg-neutral-950 rounded-md max-w-[800px] flex-wrap w-full shadow-lg" meta-id=${crypto.randomUUID()}>
                    <picture class="w-40 p-4">
                        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="object-cover object-center h-full w-full rounded-md">
                    </picture>
                    <div class="p-4">
                        <h3 class="text-3xl font-bold">${book.title}</h3>
                        <p class="text-lg mt-2">De <span class="font-semibold">${book.author_name}</span></p>
                        <div class="mt-2 text-neutral-400 flex flex-col gap-2">                    
                            <p>Publicado por primera vez en el año ${book.first_publish_year}</p>
                            <p>${book.edition_count} ediciones en ${book.language?.reduce((total) => total + 1 , 0)} idiomas</p>
                        </div>
                    </div>             
                </div>
            `
            }).join("");
        
            booksContainer.innerHTML = cardBook;
        })
    })
}

const skeleton = `
<div role="status" class="md:w-[800px] p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

`