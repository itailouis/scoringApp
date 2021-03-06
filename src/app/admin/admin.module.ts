import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AddscoringComponent } from './addscoring/addscoring.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, AddscoringComponent, UsersComponent, AdduserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
