import {Component, OnInit} from '@angular/core';
import {MessagesApiService} from './messages-api.service';
import {Observable} from 'rxjs';
import {data} from '@stanley/data';

@Component({
  selector: 'stanley-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  message$: Observable<data[]>;
  message: data;

  constructor(public messagesApiService: MessagesApiService) {
  }

  ngOnInit(): void {
    this.message$ = this.messagesApiService.getMessage();
    this.message = {message: 'Message from app'};
  }

  updateMessage() {
    this.message$ = this.messagesApiService.updateMessage();
  }
}
