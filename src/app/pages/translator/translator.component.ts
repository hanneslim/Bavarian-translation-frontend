import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Destroyable } from 'src/app/shared/classes/destroyable';
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
export class TranslatorComponent extends Destroyable {
  public translatorForm: TranslatorFormType = this._fb.group({
    germanText: this._fb.control<string>(''),
    bavarianText: this._fb.control<string>(''),
  });

  public activateSpinner = false;

  constructor(
    private _fb: NonNullableFormBuilder,
    private _postTranslationService: PostTranslationsService
  ) {
    super();
  }

  public sendTranslationRequest() {
    this.activateSpinner = true;
    const text = this.translatorForm.controls.germanText.getRawValue();
    this._postTranslationService
      .postTranslation(text)
      .pipe(takeUntil(this._destroy))
      .subscribe((translation) => {
        this.translatorForm.controls.bavarianText.setValue(
          translation.bavarianText
        );
        this.activateSpinner = false;
      });
  }

  public deleteText() {
    this.translatorForm.controls.germanText.reset();
    this.translatorForm.controls.bavarianText.reset();
  }

  public copyBavText() {
    navigator.clipboard.writeText(
      this.translatorForm.controls.bavarianText.value
    );
    (
      document.getElementById('bavarian-text-area') as HTMLInputElement
    ).select();
  }
}
