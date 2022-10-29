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

const landOptions = [
  { id: 'deBY', label: 'Bayern' },
  { id: 'at', label: 'Österreich' },
  { id: 'ch', label: 'Schweiz' },
  { id: 'lu', label: 'Luxemburg' },
  { id: 'deBW', label: 'Baden-Württemberg' },
  { id: 'deSL', label: 'Saarland' },
  { id: 'deBE', label: 'Berlin' },
  { id: 'deHE', label: 'Hessen' },
  { id: 'deTÜ', label: 'Tühringen' },
  { id: 'deSC', label: 'Sachsen' },
  { id: 'deNS', label: 'Niedersachsen' },
  { id: 'deMV', label: 'Mecklenburg-Vorpommern' },
  { id: 'deHH', label: 'Hamburg' },
  { id: 'deBR', label: 'Bremen' },
  { id: 'deNW', label: 'Nord-Rhein-Westfalen' },
  { id: 'deSH', label: 'Schleswig-Holstein' },
  { id: 'deBB', label: 'Brandenburg' },
  { id: 'deSA', label: 'Sachsen-Anhalt' },
  { id: 'deRP', label: 'Rheinland-Pfalz' },
  { id: 'unknown', label: 'Sonstiges' },
];

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

  public landOptions = landOptions;
  constructor(private _fb: NonNullableFormBuilder) {}
}
