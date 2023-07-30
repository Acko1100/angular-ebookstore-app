import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter <number> ();
  
  sort='padajucoj';
  itemsShowCount = 12;

  constructor() { }
  ngOnInit(): void {

  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(columnsNumber: number): void {
    this.columnsCountChange.emit(columnsNumber);
  }
  
}
