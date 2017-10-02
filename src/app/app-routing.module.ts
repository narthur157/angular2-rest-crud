import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent }      from './user-list.component';
import { UserDetailComponent }  from './user-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '',  component: DashboardComponent },
  { path: 'users/:id', component: DashboardComponent },
  { path: 'users',     component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}