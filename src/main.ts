import './style.css'
import { searchBooks } from './utils/searchBooks.ts'
import { getBooks } from './services/getBooks.ts';
import { createBooksCards } from './components/createBookCards.ts';
import { booksLoader } from './utils/booksLoader.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col justify-center items-center gap-5 p-10">
    <h1 class="font-bold text-5xl">StarBooks📚</h1>
    <input type="text" id="search" name="search" placeholder="Buscar nombre del Libro" class="p-3 rounded-md w-96 focus:outline-none shadow-md">

    <div class="flex gap-3">
      <input type="checkbox" name="ebook" id="ebook">
      <label for="ebook">Ebook</label>
      <input type="checkbox" name="audiobook" id="audiobook">
      <label for="audiobook">Audiobook</label>
      <input type="checkbox" name="physicalbook" id="physicalbook">
      <label for="physicalbook">Libro Fisico</label>
    </div>

    <div id="books-container" class="flex flex-col gap-5 items-center"></div>
  </div>
`
//Elementos del DOM
const booksContainer = document.getElementById("books-container") as HTMLDivElement;
const search = document.querySelector<HTMLInputElement>('#search')!;
const ebookCheckbox = document.getElementById("ebook") as HTMLInputElement;


//Eventos
searchBooks(booksContainer,search);

// Evento para filtrar libros que sean ebooks
ebookCheckbox.addEventListener("change",()=>{
  booksLoader(booksContainer);
  if (ebookCheckbox.checked){
    getBooks(search.value).then(books => {
      const bookFilter = books.items.filter(book => book.saleInfo.isEbook === true);
      const cardBook = createBooksCards(bookFilter);
      booksContainer.innerHTML = cardBook;
    });
  }else{
    getBooks(search.value).then(books => {
      booksContainer.innerHTML = createBooksCards(books.items);
    });
  }
})







