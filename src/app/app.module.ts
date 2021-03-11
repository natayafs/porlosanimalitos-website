import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SlidesroutesComponent } from './slidesroutes/slidesroutes.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdopcionesComponent } from './adopciones/adopciones.component';
import { CastracionesComponent } from './castraciones/castraciones.component';
import { PlansanitarioComponent } from './plansanitario/plansanitario.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    PagenotfoundComponent,
    SlidesroutesComponent,
    AboutComponent,
    ContactoComponent,
    AdopcionesComponent,
    CastracionesComponent,
    PlansanitarioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    FontAwesomeModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
