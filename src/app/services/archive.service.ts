import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Archive } from './archive.model';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private _url = 'assets/mocks/';

  constructor(private _http: HttpClient) { }

  getArchive(name: string): Observable<Archive> {
    const url = `${this._url}${name}.json`;
    return this._http.get<Archive>(url);
  }
}
