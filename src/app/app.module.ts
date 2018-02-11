import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { IntroProjectComponent } from './views/intro-project/intro-project.component';
import { TeamsComponent } from './views/teams/teams.component';
import { FooterComponent } from './views/footer/footer.component';
import { BannerComponent } from './views/banner/banner.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroProjectComponent,
    TeamsComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
