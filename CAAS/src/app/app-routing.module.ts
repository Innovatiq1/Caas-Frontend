import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/student/home/home.component';
import { LoginComponent } from './modules/onboarding/login/login.component';
import { DashboardComponent } from './modules/student/dashboard/dashboard.component';
import { CourseDetailComponent } from './modules/student/course-detail/course-detail.component';
import { ProfileDashboardComponent } from './modules/student/profile-dashboard/profile-dashboard.component';
import { HomeLandingpageComponent } from './modules/student/home-landingpage/home-landingpage.component';
import { CoursesListComponent } from './modules/student/courses-list/courses-list.component';
import { NetworkComponent } from './modules/student/network/network.component';
import { PaymentComponent } from './modules/student/payment/payment.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'student',
    loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule)
  },

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component:   DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-detail', component: CourseDetailComponent },
  { path: 'profile', component: ProfileDashboardComponent},
  { path: 'landing', component: HomeLandingpageComponent},
  { path: 'courses', component: CoursesListComponent},
  { path: 'network', component: NetworkComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'courses', component: CourseDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
