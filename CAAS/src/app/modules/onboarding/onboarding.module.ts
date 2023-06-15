import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared/shared.module';

const route: Routes = [
  // {
    // path: '', component: HomeComponent,
    // children: [
      { path: 'login', component: LoginComponent },
    // ]
  // }

]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

  ]
})
export class OnboardingModule { }
