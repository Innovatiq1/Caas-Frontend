import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/student/home/home.component';
import { LoginComponent } from './modules/onboarding/login/login.component';
import { DashboardComponent } from './modules/student/dashboard/dashboard.component';
import { CourseDetailComponent } from './modules/student/course-detail/course-detail.component';

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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
