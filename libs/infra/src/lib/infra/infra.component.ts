import { Component, OnInit } from '@angular/core';
import {Message} from '@stanley/data';

@Component({
  selector: 'stanley-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.scss']
})
export class InfraComponent implements OnInit {

  message: Message;

  ngOnInit(): void {
    this.message = {message: 'message from lib'};
  }

}
