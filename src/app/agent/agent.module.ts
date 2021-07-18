import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { HomeComponent } from './home/home.component';
import { RateuserComponent } from './rateuser/rateuser.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [HomeComponent, RateuserComponent, ProfileComponent],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
