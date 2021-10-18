import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamPageComponent } from './pages/our-team-page/our-team-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'ourTeam', component: OurTeamPageComponent}, 
  {path: 'services', component: ServicesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
