import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Archive, Topic } from './archive.model';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private _name!: string;
  private _url = 'assets/mocks/';

  constructor(private _http: HttpClient) { }

  public getArchive(name: string): Observable<Archive> {
    this._name = name;
    const url = `${this._url}${name}.json`;
    return this._http.get<Archive>(url);
  }
}
