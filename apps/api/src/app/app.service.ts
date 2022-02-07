import {Injectable} from '@nestjs/common';
import {data} from '@stanley/data';

@Injectable()
export class AppService {

  messages: data[];

  constructor() {
    this.messages = [{message: 'Message from server'}, {message: 'Another message from server'}]
  }

  getData(): data[] {
    return this.messages;
  }

  updateData() {
    this.messages.push({message: `message ${Math.floor(Math.random() * 1000)}`});
  }
}
