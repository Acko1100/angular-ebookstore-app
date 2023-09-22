import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  //Omogucava primanje informacija o knjizi koja ce biti prikazana
  @Input() book: Book | undefined;


  @Output() addToCart = new EventEmitter();
  
  //Dodaje knjigu u korpu sa njenim informacijama
  onAddToCart(): void {
    this.addToCart.emit(this.book);
  }
}
