import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() sortUpdated = new EventEmitter<string>(); 
  @Output() itemsUpdated = new EventEmitter<number>();

  sort = 'rastucoj';
  itemsShowCount = 12;

  constructor() {}

  //Sortiranje po ceni 
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortUpdated.emit(newSort); 
  }

  //Prikaz odredjenog broja knjiga
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsUpdated.emit(count); 
  }

  //Prikaz knjiga u koloni
  onColumnsUpdated(columnsNumber: number): void {
    this.columnsCountChange.emit(columnsNumber);
  }
}
