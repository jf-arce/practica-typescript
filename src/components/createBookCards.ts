import { Item } from "../vite-env";

export function createBooksCards(books: Item[]){
    const bookCard = books.map(book => {
        return `
            <div class="flex md:flex-row flex-col md:gap-2 bg-neutral-950 rounded-md max-w-[800px] w-full shadow-lg" meta-id=${book.id}>
                <picture class="md:w-52 h-[200px] md:h-full p-4">
                    <img src=${book.volumeInfo.imageLinks?.smallThumbnail} alt="Portada del libro de ${book.volumeInfo.title}" class="object-cover object-center h-full w-full rounded-md">
                </picture>
                <div class="p-4 flex flex-col w-full">
                    <h3 class="text-2xl font-bold text-balance">${book.volumeInfo.title}</h3>
                    <p class="text-lg mt-2">De <span class="font-semibold">${book.volumeInfo.authors}</span></p>
                    <div class="mt-2 text-neutral-400 flex flex-col gap-2">                    
                        <p>Publicado por primera vez en el año ${book.volumeInfo.publishedDate}</p>
                        <p>Idioma: ${book.volumeInfo.language}</p>
                    </div>
                    <p>
                       Rating <span class="text-neutral-400">${book.volumeInfo.ratingsCount}</span>
                    </p>
                    <a href=${book.volumeInfo.infoLink} class="p-2 mt-2 bg-neutral-800 w-20 text-center rounded-md hover:bg-neutral-700 transition-colors">Ver más</a>
                </div>             
            </div>
        `
    }).join("");
    
    return bookCard;
}