import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})

export class ProfileDashboardComponent {
  // isDropdownOpen = false;

  constructor(private router: Router) { }
  navigateTo(route: string) {
    if (route == 'profile') {
      this.router.navigate(['/profile'])
    } else if (route == 'courses') {
      this.router.navigate(['/courses'])
    } else if (route == 'network') {
      this.router.navigate(['/network'])
    }
    // else if (route == 'logout') {
      // localStorage.clear();
      // this.router.navigate(['/home'])
    // }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  // toggleDropdown() {
  //   debugger
  //   this.isDropdownOpen = true;
  // }


}
