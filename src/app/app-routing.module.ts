import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { ResetComponent } from './authentication/reset/reset.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { DashboardComponent } from './guest/dashboard/dashboard.component';

const routes: Routes = [
  {path:'auth',component:AuthenticationComponent},
  {path:'guest/dashboard', component:DashboardComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
