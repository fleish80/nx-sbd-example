import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<any> {
    return this.http.get<any>('/api');
  }

}
