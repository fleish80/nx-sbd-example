import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraComponent } from './infra/infra.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InfraComponent
  ],
  exports: [
    InfraComponent
  ],
})
export class InfraModule {}
