import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskappComponent } from './taskapp/taskapp.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ResetComponent } from './authentication/reset/reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './guest/dashboard/dashboard.component';
import { BusinessComponent } from './guest/business/business.component';
import { CareerComponent } from './guest/career/career.component';
import { TaskComponent } from './guest/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServiceComponent,
    AuthenticationComponent,
    HeaderComponent,
    FooterComponent,
    TaskappComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
    DashboardComponent,
    BusinessComponent,
    CareerComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
