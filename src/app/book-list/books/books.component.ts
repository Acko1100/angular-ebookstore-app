import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  book : Book = {
    id: 1,
    title:'Srpske zemlje pre Nemanjica',
    price: 1200,
    genre: 'Istorija',
    description: 'https://www.laguna.rs/n4683_knjiga_srpske_zemlje_pre_nemanjica_od_7_do_10_veka_laguna.html',
    image: "https://www.laguna.rs/_img/korice/4683/srpske_zemlje_pre_nemanjica_od_7_do_10_veka-marko_aleksic_v.jpg",
  };


  @Output() addToCart = new EventEmitter();
  
  onAddToCart(): void {
    this.addToCart.emit(this.book);
  }
}
