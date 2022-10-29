import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { PostTranslationsService } from 'src/app/shared/services/api/post-translations.service';

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

  constructor(
    private _fb: NonNullableFormBuilder,
    private _postTranslationService: PostTranslationsService
  ) {}

  public sendTranslationRequest() {
    const text = this.translatorForm.controls.germanText.getRawValue();
    this._postTranslationService
      .postTranslation(text)
      .subscribe((translation) => {
        this.translatorForm.controls.bavarianText.setValue(
          translation.bavarianText
        );
      });
  }
}