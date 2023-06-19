import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})

export class ProfileDashboardComponent {

  constructor(private router: Router) {}
  navigateTo(route : string){
    this.router.navigate(['profile', route])
  }

}
