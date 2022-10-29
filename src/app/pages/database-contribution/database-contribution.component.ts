import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import {
  AddDialectProposalsService,
  PutAddDialectWord,
  PutAddDialectText,
} from 'src/app/shared/services/api/add-dialect-proposals.service';

type WordContriFormType = FormGroup<{
  germanWord: FormControl<string>;
  dialectWord: FormControl<string>;
  description: FormControl<string>;
}>;

type TextContriFormType = FormGroup<{
  germanText: FormControl<string>;
  dialectText: FormControl<string>;
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
export class DatabaseContributionComponent extends Destroyable {
  public wordContriForm: WordContriFormType = this._fb.group({
    germanWord: this._fb.control<string>('', Validators.required),
    dialectWord: this._fb.control<string>('', Validators.required),
    description: this._fb.control<string>(''),
  });

  public textContriForm: TextContriFormType = this._fb.group({
    germanText: this._fb.control<string>('', Validators.required),
    dialectText: this._fb.control<string>('', Validators.required),
  });

  public generalsContriForm: GeneralsContriFormType = this._fb.group({
    dialect: this._fb.control<string>('', Validators.required),
    region: this._fb.control<string>('', Validators.required),
    land: this._fb.control<string>('deBY', Validators.required),
  });

  public landOptions = landOptions;
  constructor(
    private _fb: NonNullableFormBuilder,
    private _addDialectProposalService: AddDialectProposalsService
  ) {
    super();
  }

  public sendDialectWordProposal() {
    const dialectWord: PutAddDialectWord = {
      dialect: this.generalsContriForm.controls.dialect.value,
      region: this.generalsContriForm.controls.region.value,
      land: this.generalsContriForm.controls.land.value,
      germanWord: this.wordContriForm.controls.germanWord.value,
      dialectWord: this.wordContriForm.controls.dialectWord.value,
      description: this.wordContriForm.controls.description.value,
    };
    this._addDialectProposalService
      .putAddDialectWord(dialectWord)
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.wordContriForm.reset();
      });
  }

  public sendDialectTextProposal() {
    const dialectText: PutAddDialectText = {
      dialect: this.generalsContriForm.controls.dialect.value,
      region: this.generalsContriForm.controls.region.value,
      land: this.generalsContriForm.controls.land.value,
      germanText: this.textContriForm.controls.germanText.value,
      dialectText: this.textContriForm.controls.dialectText.value,
    };
    this._addDialectProposalService
      .putAddDialectText(dialectText)
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.textContriForm.reset();
      });
  }
}
