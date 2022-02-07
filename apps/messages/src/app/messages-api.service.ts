import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {data} from '@stanley/data';

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<data[]> {
    return this.http.get<data[]>('/api');
  }

  updateMessage(): Observable<data[]> {
    return this.http.post('/api', {})
      .pipe(switchMap(() => this.getMessage()));
  }

}
