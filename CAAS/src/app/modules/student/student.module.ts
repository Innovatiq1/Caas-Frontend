import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const route: Routes = [
  // {
    // path: '', component: HomeComponent,
    // children: [
      { path: 'home', component: HomeComponent },
    // ]
  // }

]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
