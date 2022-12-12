import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _meta: Meta, private _title: Title) {
    this._meta.addTags([
      {
        name: 'description',
        content:
          'Ein Deutsch zu Bairisch (Bayerisch oder Bayrisch) Übersetzer! Ebenfalls für Österreicher geeignet!',
      },
      { name: 'author', content: 'Johannes Limmer' },
      {
        name: 'keywords',
        content:
          'Bairisch Übersetzer, Bayerisch Übersetzer, Bayrisch Übersetzer',
      },
    ]);
    this._title.setTitle('Bairisch Übersetzer');
  }
}
