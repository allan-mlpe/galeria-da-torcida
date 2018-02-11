import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { IntroProjectComponent } from './intro-project/intro-project.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    BannerComponent,
    IntroProjectComponent,
    TeamsComponent,
    HomeComponent
  ]
})
export class HomeModule { }
