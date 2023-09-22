import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-filters',
  templateUrl: './book-filters.component.html',
  styleUrls: ['./book-filters.component.css']
})
export class BookFiltersComponent implements OnInit {
  
  @Output() showGenre = new EventEmitter <string> ();

  //Skup svih zanrova
  genres = ['Autobiografija','Filozofija', 'Horor', 'Drama','Ljubavne'];



  constructor () {}

  ngOnInit(){}

  //Kada se izabere zanr metod emituje showGenre sa odabranim zanrom
  onShowGenre ( genre: string) : void {
    this.showGenre.emit(genre);
  }

}
