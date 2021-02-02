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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    PagenotfoundComponent,
    SlidesroutesComponent,
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