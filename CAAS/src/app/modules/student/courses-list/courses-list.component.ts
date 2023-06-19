import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  constructor(
    private router: Router){
  }
  navigateTo(route : string){
    if(route == 'profile'){
    this.router.navigate(['/profile'])
    } else if(route == 'courses'){
      this.router.navigate(['/courses'])

    }
  }

}
