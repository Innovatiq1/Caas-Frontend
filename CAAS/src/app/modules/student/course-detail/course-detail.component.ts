import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  data = [
    {
      dates: '19 – 23 Jun 2023',
      duration: '5 days',
      delivery: 'In-person',
      fees: 'S$2,800'
    }
  ];
  currentUrl: string;
  constructor(private router: Router){
    let urlPath=this.router.url.split('/')
    this.currentUrl=urlPath[urlPath.length - 1];
  
  }
  navigate(){
    let email=localStorage.getItem('email');
    if(!email){
        this.router.navigate(['/login']);
    }
  }

}
