import { Component, OnInit } from '@angular/core';
import {data} from '@stanley/data';

@Component({
  selector: 'stanley-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.scss']
})
export class InfraComponent implements OnInit {

  message: data;

  ngOnInit(): void {
    this.message = {message: 'Message from library'};
  }

}
