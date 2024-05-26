import './style.css'
import { searchBooks } from './components/searchBooks.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col justify-center items-center gap-5 p-10">
    <h1 class="font-bold text-5xl">Book Search 📚</h1>
    <input type="text" id="search" name="search" placeholder="Buscar nombre del Libro" class="p-3 rounded-md w-96 focus:outline-none shadow-md">
    <div id="books-container" class="flex flex-col gap-5 items-center"></div>

  </div>
`

const booksContainer = document.getElementById("books-container") as HTMLDivElement;
const search = document.querySelector<HTMLInputElement>('#search')!;

searchBooks(booksContainer,search)






