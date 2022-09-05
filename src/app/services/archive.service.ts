import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Archive } from './archive.model';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private _name!: string;
  private _url = 'assets/mocks/';

  public constructor(private _http: HttpClient) {}

  public getArchive(name: string): Observable<Archive> {
    this._name = name;
    const url = `${this._url}${this._name}.json`;
    return this._http.get<Archive>(url);
  }
}
