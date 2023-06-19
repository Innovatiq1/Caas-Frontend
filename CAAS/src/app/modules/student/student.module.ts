import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeContentComponent } from './home/home-content/home-content/home-content.component';
import { HeaderComponent } from './common/header/header.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { HomeLandingpageComponent } from './home-landingpage/home-landingpage.component';

const route: Routes = [
  // {
    // path: '', component: HomeComponent,
    // children: [
    // ]
  // }

]


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    HomeContentComponent,
    HeaderComponent,
    CourseDetailComponent,
    ProfileDashboardComponent,
    HomeLandingpageComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule

  ]

})
export class StudentModule { }
