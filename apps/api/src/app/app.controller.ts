import {Controller, Get, Post} from '@nestjs/common';

import {AppService} from './app.service';
import {data} from '@stanley/data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): data[] {
    return this.appService.getData();
  }

  @Post()
  updateData(): void {
    this.appService.updateData();
  }
 }
