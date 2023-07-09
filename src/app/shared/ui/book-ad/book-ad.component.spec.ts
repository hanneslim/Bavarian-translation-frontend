import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAdComponent } from './book-ad.component';

describe('BookAdComponent', () => {
  let component: BookAdComponent;
  let fixture: ComponentFixture<BookAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
