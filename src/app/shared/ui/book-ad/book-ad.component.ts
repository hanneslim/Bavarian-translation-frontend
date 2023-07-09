import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ad[imageLink][productLink]',
  templateUrl: './book-ad.component.html',
  styleUrls: ['./book-ad.component.scss'],
})
export class BookAdComponent implements OnInit {
  @Input() imageLink: string = '';
  @Input() productLink: string = '';
  constructor() {}

  ngOnInit(): void {}
}
