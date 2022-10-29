import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type PostAddDialectWord = {
  dialect: string;
  region: string;
  land: string;
  germanWord: string;
  dialectWord: string;
  description: string;
};

export type PostAddDialectText = {
  dialect: string;
  region: string;
  land: string;
  germanText: string;
  dialectText: string;
};

@Injectable({
  providedIn: 'root',
})
export class AddDialectProposalsService {
  constructor(private _http: HttpClient) {}

  public postAddDialectText(
    addDialectText: PostAddDialectText
  ): Observable<string> {
    return this._http.post<string>(
      'https://bavarian-translator.herokuapp.com/save-dialect-text/',
      addDialectText
    );
  }

  public postAddDialectWord(
    addDialectWord: PostAddDialectWord
  ): Observable<string> {
    return this._http.post<string>(
      'https://bavarian-translator.herokuapp.com/save-dialect-word/',
      addDialectWord
    );
  }
}
