import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ServicesPageComponent } from './services-page.component';



@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [ServicesPageComponent]
})
export class ServicesPageModule { }
