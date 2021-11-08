import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [ServicesPageComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ServicesPageComponent],
})
export class ServicesPageModule {}
