import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SlidesroutesComponent } from './slidesroutes/slidesroutes.component';
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  { path: '', component: SlidesroutesComponent },
  { path: 'home', component: WelcomeComponent },
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
