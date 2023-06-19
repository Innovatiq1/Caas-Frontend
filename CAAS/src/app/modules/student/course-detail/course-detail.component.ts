import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  featuredCourse = false;
  stackableCourse = false;
  data = [
    {
      dates: '19 – 23 Jun 2023',
      duration: '5 days',
      delivery: 'In-person',
      fees: 'S$2,800'
    }
  ];
  currentUrl: string;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private renderer: Renderer2){
    let urlPath=this.router.url.split('/')
    this.currentUrl=urlPath[urlPath.length - 1];
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if(params.coursetype === 'featured-course'){
        this.featuredCourse = true;
      }
      else if(params.coursetype === 'stackable-course'){
        this.stackableCourse = true;
      }
    });

  
  }
  navigate(){
    // let email=localStorage.getItem('email');
    // if(!email){
        this.router.navigate(['/login']);
    // }
  }
  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
