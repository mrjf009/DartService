import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
