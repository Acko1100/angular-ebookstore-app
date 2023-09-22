import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

//Visina redova ukoliko se prikazuju 3 ili 4 kolone
const ROWS_HEIGHT: { [id: number] : number } = {3 : 335 , 4 : 350}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  //Niz knjiga koje se prikazuju
  books: Book[] = [];
  //Niz knjiga filtritanih po zanru
  filteredBooks: Book[] = [];
  columns = 3;
  //Trenutno izabrani zanr za filtriranje
  genre: string | undefined;
  rowHeight = ROWS_HEIGHT[this.columns];
  itemsShowCount = 12; 
  
  //Trenutno postavljeno sortitanje po ceni
  sortBy: string = 'rastucoj'; 


  constructor(private cartService: CartService, private bookService: BookService) {}


  //Funkcija koja se poziva pri inicijalizaciji ucitava sve knjige i njihovo sortiranje
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.filterBooksByGenre();
    this.sortBooksByPrice();
  }

  //Funkcija koja se poziva kada se promeni broj kolona
  onColumnsCountChange(columnsNumber: number): void {
    this.columns = columnsNumber;
    this.rowHeight = ROWS_HEIGHT[this.columns];
  }

  //Funkcija koja se poziva pri odabiru novog zanra za filtriranje
  onShowGenre(newGenre: string): void {
    this.genre = newGenre;
    this.filterBooksByGenre();
    this.sortBooksByPrice(); 
  }

  

  //Funkcija koja se poziva pri dodavanja u korpu
  onAddToCart(book: Book): void {
    this.cartService.addToCart({
      picture: book.image,
      name: book.title,
      price: book.price,
      quantity: 1,
      id: book.id
    });
  }

  //Funkcija koja se poziva kada se promeni nacin sortiranja
  onSortUpdated(newSort: string): void {
    if (newSort === 'rastucoj' || newSort === 'padajucoj') {
        this.sortBy = newSort;
        this.sortBooksByPrice();
    } else {
        console.error("Invalid sorting option");
    }
}


//Funkcija koja se poziva kada korisnik promeni broj knjiga koji ce biti prikazan. Takodje, ponovo filtrira i sortira knjige
onItemsUpdated(count: number | any): void {
  this.itemsShowCount = count;
  this.filterBooksByGenre();
  this.sortBooksByPrice();
}


//Funkcija za filtriranje knjiga prema odabranom zanru
private filterBooksByGenre(): void {
    if (!this.genre || this.genre === 'Svi zanrovi') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(book => book.genre === this.genre);
    }
  }

//Funkcija za sortiranje po ceni (padajuca, rastuca)
  private sortBooksByPrice(): void {
    this.filteredBooks.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        if (this.sortBy === 'rastucoj') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });
}

}