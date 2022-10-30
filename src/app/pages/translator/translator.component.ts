import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import { PostTranslationsService } from 'src/app/shared/services/api/post-translations.service';
import { Meta, Title } from '@angular/platform-browser';

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
    private _postTranslationService: PostTranslationsService,
    private _meta: Meta,
    private _title: Title
  ) {
    super();
    this._meta.addTags([
      {
        name: 'description',
        content:
          'Deutsch - Bairisch (Bayerisch/Bayrisch) Übersetzer! Auch für Österreich geeignet!',
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
}
