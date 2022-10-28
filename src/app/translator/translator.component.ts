import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

type TranslatorFormType = FormGroup<{
  germanText: FormControl<string>;
  bavarianText: FormControl<string>;
}>;

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent {
  public translatorForm: TranslatorFormType = this._fb.group({
    germanText: this._fb.control<string>(''),
    bavarianText: this._fb.control<string>(''),
  });

  constructor(private _fb: NonNullableFormBuilder) {}
}
