import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { HomeComponent } from './home/home.component';
import { RateuserComponent } from './rateuser/rateuser.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalllistComponent } from './calllist/calllist.component';


@NgModule({
  declarations: [HomeComponent, RateuserComponent, ProfileComponent, CalllistComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
