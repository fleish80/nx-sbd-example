import {Injectable} from '@nestjs/common';
import {Message} from '@stanley/data';

@Injectable()
export class AppService {

  messages: Message[];

  constructor() {
    this.messages = [{message: 'Message from server'}, {message: 'Another message from server'}];
  }

  getData(): Message[] {
    return this.messages;
  }

  updateData() {
    this.messages.push({message: `message ${Math.floor(Math.random() * 1000)}`});
  }
}
