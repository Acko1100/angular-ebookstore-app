import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../models/book.model';


const ROWS_HEIGHT: { [id: number] : number } = {3 : 335 , 4 : 350}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  columns = 3;
  genre: string | undefined ;
  rowHeight = ROWS_HEIGHT [this.columns];

  constructor (private cartService: CartService) {}

  ngOnInit () {}

  onColumnsCountChange(columnsNumber: number): void {
    this.columns = columnsNumber;
    this.rowHeight = ROWS_HEIGHT [this.columns];
  }

  onShowGenre (newGenre:string): void {
    this.genre = newGenre;
  }

  onAddToCart(book:Book): void {
    this.cartService.addToCart({
      picture: book.image,
      name: book.title,
      price: book.price,
      quantity: 1,
      id: book.id
    });
  }
  
}

