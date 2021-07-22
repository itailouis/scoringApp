import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalllistComponent } from './calllist/calllist.component';
import { HomeComponent } from './home/home.component';
import { RateuserComponent } from './rateuser/rateuser.component';

const routes: Routes = [
   
  { path: 'rateuser/:voicecallid', component: RateuserComponent },
  { path: 'callList', component: CalllistComponent },
  { path: 'home', component: HomeComponent },
  { path: '', 
  redirectTo: 'home' },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
