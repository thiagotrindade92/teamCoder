import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { CompanyComponent } from './pages/register/company.component';
import { FinishComponent } from './pages/register/finish.component';
import { AddressCompanyComponent } from './pages/register/address-company.component';
import { MaterialModule } from './shared/material.module';
import { RegisterComponent } from './pages/register/register.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ActivationComponent } from './pages/activation/activation.component';
import { HomeComponent } from './pages/home/home.component';
import { CreatePasswordComponent } from './pages/create-password/create-password.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CompanyComponent,
    FinishComponent,
    AddressCompanyComponent,
    ActivationComponent,
    HomeComponent,
    CreatePasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
