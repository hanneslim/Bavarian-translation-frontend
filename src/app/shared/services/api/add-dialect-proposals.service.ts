import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type PutAddDialectWord = {
  dialect: string;
  region: string;
  land: string;
  germanWord: string;
  dialectWord: string;
  description: string;
};

export type PutAddDialectText = {
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

  public putAddDialectText(
    addDialectText: PutAddDialectText
  ): Observable<{ message: string }> {
    return this._http.put<{ message: string }>(
      'https://fair-erin-basket-clam.cyclic.app/save-dialect-text/',
      addDialectText
    );
  }

  public putAddDialectWord(
    addDialectWord: PutAddDialectWord
  ): Observable<{ message: string }> {
    return this._http.put<{ message: string }>(
      'https://fair-erin-basket-clam.cyclic.app/save-dialect-word/',
      addDialectWord
    );
  }
}
