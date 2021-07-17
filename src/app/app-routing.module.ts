import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';

import { DashboardComponent } from './guest/dashboard/dashboard.component';
import { TaskComponent } from './guest/task/task.component';


const routes: Routes = [
  {path:'auth',component:AuthenticationComponent},
  {path:'guest/dashboard', component:DashboardComponent},
  {path:'guest/dashboard/task', component:TaskComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
