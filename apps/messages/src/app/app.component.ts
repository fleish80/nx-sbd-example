import {Component, OnInit} from '@angular/core';
import {MessagesApiService} from './messages-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'stanley-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  message$: Observable<any>;
  message = 'messages from app';

  constructor(public messagesApiService: MessagesApiService) {
  }

  ngOnInit(): void {
    this.message$ = this.messagesApiService.getMessage();
  }
}
