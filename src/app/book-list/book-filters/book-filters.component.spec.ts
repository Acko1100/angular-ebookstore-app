import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFiltersComponent } from './book-filters.component';

describe('FiltersComponent', () => {
  let component: BookFiltersComponent;
  let fixture: ComponentFixture<BookFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookFiltersComponent]
    });
    fixture = TestBed.createComponent(BookFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
