import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AddscoringComponent } from './addscoring/addscoring.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [HomeComponent, AddscoringComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
