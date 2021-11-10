import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatIconModule,
  ],
  exports: [ServicesPageComponent],
})
export class ServicesPageModule {}
