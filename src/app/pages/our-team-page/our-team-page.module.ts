import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamPageComponent } from './our-team-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormModule } from './contact-form/contact-form.module';

@NgModule({
  declarations: [OurTeamPageComponent],
  imports: [CommonModule, ContactFormModule],
  exports: [OurTeamPageComponent],
})
export class OurTeamPageModule {}
