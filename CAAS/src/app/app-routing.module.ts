import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/student/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },

  {
    path: 'student',
    loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
