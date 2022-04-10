import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddressCompanyComponent } from './pages/register/address-company.component';
import { CompanyComponent } from './pages/register/company.component';
import { FinishComponent } from './pages/register/finish.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivationComponent } from './pages/activation/activation.component';
import { HomeComponent } from './pages/home/home.component';
import { CreatePasswordComponent } from './pages/create-password/create-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'addresscompany', component: AddressCompanyComponent },
  { path: 'finish', component: FinishComponent },
  { path: 'activation', component: ActivationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createpassword', component: CreatePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
