import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, MatCheckboxModule],
  exports: [ContactFormComponent],
})
export class ContactFormModule {}
