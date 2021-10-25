import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './common/modules/footer/footer.module';
import { NavBarModule } from './common/modules/nav-bar/nav-bar.module';
import { OurTeamPageModule } from './pages/our-team-page/our-team-page.module';
import { ServicesPageModule } from './pages/services-page/services-page.module';
import { StartPageModule } from './pages/start-page/start-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    StartPageModule,
    OurTeamPageModule,
    ServicesPageModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
