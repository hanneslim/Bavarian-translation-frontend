import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

type PostTranslationResponse = {
  message: string;
  germanText: string;
  bavarianText: string;
};

@Injectable({
  providedIn: 'root',
})
export class PostTranslationsService {
  constructor(private _http: HttpClient) {}

  public postTranslation(
    germanText: string
  ): Observable<PostTranslationResponse> {
    return this._http.post<PostTranslationResponse>(
      'https://fair-erin-basket-clam.cyclic.app/text/',
      {
        text: germanText,
      }
    );
  }
}
