import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationDialogComponent } from '../application-dialog/application-dialog.component';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  featuredCourse = false;
  stackableCourse = false;
  params=false;
  data = [
    {
      dates: '19 – 23 Jun 2023',
      duration: '5 days',
      delivery: 'In-person',
      fees: 'S$2,800'
    }
  ];
  currentUrl: string;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private renderer: Renderer2,
    private dialog: MatDialog){
    let urlPath=this.router.url.split('/')
    this.currentUrl=urlPath[urlPath.length - 1];
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if(!params.coursetype){
        this.params=true;
      }
      if(params.coursetype === 'featured-course'){
        this.featuredCourse = true;
      }
      else if(params.coursetype === 'stackable-course'){
        this.stackableCourse = true;
      }
    });

  
  }
  navigateToCoursePage() {
    this.router.navigate(['/courses']); 
  }

  openDialog() {
    let email=localStorage.getItem('email');
    if(!email){
      this.router.navigate(['/login']);
  } else {
  const dialogRef = this.dialog.open(ApplicationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }}
  navigate(){
    let email=localStorage.getItem('email');
    if(!email){
        this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/payment']);
    }
  }
  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
