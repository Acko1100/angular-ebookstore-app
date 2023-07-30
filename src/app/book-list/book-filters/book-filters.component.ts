import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-filters',
  templateUrl: './book-filters.component.html',
  styleUrls: ['./book-filters.component.css']
})
export class BookFiltersComponent implements OnInit {
  
  @Output() showGenre = new EventEmitter <string> ();


  genres = ['autobiografija','akcija', 'horor', 'naucna fantasktika'];



  constructor () {}

  ngOnInit(){}

  onShowGenre ( genre: string) : void {
    this.showGenre.emit(genre);
  }

}
