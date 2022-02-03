import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {Message} from '@stanley/data';

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<Message[]> {
    return this.http.get<Message[]>('/api');
  }

  updateMessage(): Observable<Message[]> {
    return this.http.post('/api', {}).pipe(
      switchMap(() => this.getMessage())
    );
  }

}
