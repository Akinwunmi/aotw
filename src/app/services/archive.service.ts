import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

import { ArchiveResponse, ArchivesResponse, Archive } from './archive.model';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  public activeArchive = new Subject<Archive>();

  public constructor(private _http: HttpClient) {}

  public getArchives(): Observable<Archive[]> {
    const { url, archives } = environment.api;
    return this._http
      .get<ArchivesResponse>(url + archives)
      .pipe(map(response => response.archives));
  }

  public getArchive(id: number): Observable<Archive> {
    const { url, archives } = environment.api;
    return this._http
      .get<ArchiveResponse>(url + archives + id)
      .pipe(map(response => response.archive[0]));
  }
}
