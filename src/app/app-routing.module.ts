import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SlidesroutesComponent } from './slidesroutes/slidesroutes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component'
import { AdopcionesComponent } from './adopciones/adopciones.component'
import { CastracionesComponent } from './castraciones/castraciones.component'
import { PlansanitarioComponent } from './plansanitario/plansanitario.component'

const routes: Routes = [
  { path: '', component: SlidesroutesComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'adopciones', component: AdopcionesComponent },
  { path: 'castraciones', component: CastracionesComponent },
  { path: 'plansanitario', component: PlansanitarioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
