import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddscoringComponent } from './addscoring/addscoring.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', 
  redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add_users', component: AdduserComponent },
  { path: 'add', component: AddscoringComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
