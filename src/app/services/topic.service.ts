import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Topic, TopicsResponse } from './topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  public constructor(private _http: HttpClient) {}

  public getTopics(): Observable<Topic[]> {
    const { url, topics } = environment.api;
    return this._http.get<TopicsResponse>(url + topics).pipe(map(response => response.topics));
  }

  public getTopic(id: number): Observable<Topic[]> {
    const { url, archives } = environment.api;
    return this._http.get<Topic[]>(url + archives + id);
  }
}
