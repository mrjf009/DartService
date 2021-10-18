import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './common/modules/nav-bar/nav-bar.module';
import { StartPageModule } from './pages/start-page/start-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    StartPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
