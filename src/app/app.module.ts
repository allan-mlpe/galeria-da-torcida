import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { IntroProjectComponent } from './views/intro-project/intro-project.component';
import { TeamsComponent } from './views/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroProjectComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
