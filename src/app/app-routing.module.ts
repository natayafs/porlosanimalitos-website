import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SlidesroutesComponent } from './slidesroutes/slidesroutes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component'
import { ProyectoComponent } from './Proyecto/proyecto.component'

const routes: Routes = [
  { path: '', component: SlidesroutesComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
