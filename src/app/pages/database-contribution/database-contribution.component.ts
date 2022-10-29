import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

type WordContriFormType = FormGroup<{
  germanWord: FormControl<string>;
  bavarianWord: FormControl<string>;
  description: FormControl<string>;
}>;

type TextContriFormType = FormGroup<{
  germanText: FormControl<string>;
  bavarianText: FormControl<string>;
}>;

type GeneralsContriFormType = FormGroup<{
  dialect: FormControl<string>;
  region: FormControl<string>;
  land: FormControl<string>;
}>;

@Component({
  selector: 'app-database-contribution',
  templateUrl: './database-contribution.component.html',
  styleUrls: ['./database-contribution.component.scss'],
})
export class DatabaseContributionComponent {
  public wordContriForm: WordContriFormType = this._fb.group({
    germanWord: this._fb.control<string>(''),
    bavarianWord: this._fb.control<string>(''),
    description: this._fb.control<string>(''),
  });

  public textContriForm: TextContriFormType = this._fb.group({
    germanText: this._fb.control<string>(''),
    bavarianText: this._fb.control<string>(''),
  });

  public generalsContriForm: GeneralsContriFormType = this._fb.group({
    dialect: this._fb.control<string>(''),
    region: this._fb.control<string>(''),
    land: this._fb.control<string>(''),
  });

  constructor(private _fb: NonNullableFormBuilder) {}
}
