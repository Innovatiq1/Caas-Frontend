import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Image {
  src: string;
  alt: string;
  text:string;
  title:string;
  dates:string;
}
interface MyCourse {
  src: string;
  alt: string;
  text:string;
  title:string;
  dates:string;
}

interface Stackable {
  src: string;
  // alt: string;
  text:string;
  title:string;
  // dates:string;
}


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  visibleImages: Image[] = [];
stackableImages: Stackable[] = [];
myCourseImages: MyCourse[] = [];

  constructor(
    private router: Router){
  }
  navigateTo(route : string){
    if(route == 'profile'){
    this.router.navigate(['/profile'])
    } else if(route == 'courses'){
      this.router.navigate(['/courses'])

    }
    else if(route == 'network'){
      this.router.navigate(['/network'])

    }
    else if(route == 'settings'){
      localStorage.clear();
      this.router.navigate(['/home'])
      }

  }
  currentIndex = 0;
stackIndex = 0;


ngOnInit() {
  this.updateVisibleImages();
  this.updateVisibleStack();
  this.updateVisibleMyCourse();

}
isDropdownOpen: boolean = false;

toggleDropdown(): void {
  this.isDropdownOpen = true;
}
logout(){
  localStorage.clear();
  this.router.navigate(['/home'])

}

updateVisibleImages() {
  const startIndex = this.currentIndex;
  const endIndex = this.currentIndex + 4;
  this.visibleImages = this.images.slice(startIndex, endIndex);

}
updateVisibleMyCourse() {
  const startIndex = this.currentIndex;
  const endIndex = this.currentIndex + 4;
  this.visibleImages = this.images.slice(startIndex, endIndex);

}
updateVisibleStack() {
  const startIndex = this.stackIndex;
  const endIndex = this.stackIndex + 4;
  this.stackableImages = this.stackableImage.slice(startIndex, endIndex);

}
showPreviousImages() {
  this.currentIndex -= 5;
  if (this.currentIndex < 0) {
    this.currentIndex = this.images.length - 5;
  }
  this.updateVisibleImages();
}
showPreviousStack() {
  this.stackIndex -= 5;
  if (this.stackIndex < 0) {
    this.stackIndex = this.stackableImage.length - 5;
  }
  this.updateVisibleStack();
}


showNextImages() {
  this.currentIndex += 5;
  if (this.currentIndex >= this.images.length) {
    this.currentIndex = 0;
  }
  this.updateVisibleImages();
}
showNextStack() {
  this.stackIndex += 5;
  if (this.stackIndex >= this.stackableImage.length) {
    this.stackIndex = 0;
  }
  this.updateVisibleStack();
}

images: Image[] = [
  { src: '/assets/images/course1.png', alt: 'Image 1',text: '2 Months at 5-10 Hrs Per/Week',title:'Personnel Licensing for Regulators',dates:'19 Jun - 23 Aug 2023' },
  { src: '/assets/images/course9.png', alt: 'Image 9',text: '3 Months at 3-4 Hrs Per/Week',title:'Senior Airport Fire Officers' ,dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course4.png', alt: 'Image 4' ,text: '3 Months at 3-4 Hrs Per/Week',title:'Safety Oversight Inspectors',dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course5.png', alt: 'Image 5',text: '2 Months at 5-10 Hrs Per/Week' ,title:'Junior Airport Fire Officers',dates:'19 Jun - 23 Aug 2023' },
  { src: '/assets/images/course7.png', alt: 'Image 7',text: '3 Months at 3-4 Hrs Per/Week' ,title:'State Safety Programme Implementation',dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course2.png', alt: 'Image 2',text: '1 Month at 10 Hrs Per/Week',title:'Aeronautical Search and Rescue Operations',dates:'01 Jun - 30 Jun 2023'  },
  { src: '/assets/images/course3.png', alt: 'Image 3' ,text: '15 Days at 5-10 Hrs Per/Day',title:'Electronics Personnel Communications',dates:'19 Jun - 30 Jun 2023' },
  { src: '/assets/images/course6.png', alt: 'Image 6',text: '3 Months at 3-4 Hrs Per/Week',title:'ICAO PANS-OPS Instrument Procedures',dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course8.png', alt: 'Image 8',text: '4 Days at 3-4 Hrs Per/Day' ,title:'Aviation Security Programme in Public Policy',dates:'19 Jun - 23 Jun 2023' },
];
myCourses: MyCourse[] = [
  { src: '/assets/images/course9.png', alt: 'Image 9',text: '3 Months at 3-4 Hrs Per/Week',title:'Senior Airport Fire Officers' ,dates:'01 Jun - 15 Oct 2023' },
];
mywishlistCourses: MyCourse[] = [
  // { src: '/assets/images/course1.png', alt: 'Image 1',text: '2 Months at 5-10 Hrs Per/Week',title:'Personnel Licensing for Regulators',dates:'19 Jun - 23 Aug 2023' },
  { src: '/assets/images/course9.png', alt: 'Image 9',text: '3 Months at 3-4 Hrs Per/Week',title:'Senior Airport Fire Officers' ,dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course4.png', alt: 'Image 4' ,text: '3 Months at 3-4 Hrs Per/Week',title:'Safety Oversight Inspectors',dates:'01 Jun - 15 Oct 2023' },
];

stackableImage: Stackable[] = [
  { src: '/assets/images/stackable1.png' ,title:'Civil Aviation Management',text:'This programme comprises both compulsory and elective courses. You may select up to 2 compulsory courses and any elective course based on your profession or areas of interest.'},
  { src: '/assets/images/stackable2.png',title:'Aviation Safety',text:'This programme comprises both compulsory and elective courses. You may select up to 7 compulsory courses and any elective course based on your profession or areas of interest.' },
  { src: '/assets/images/stackable4.png',title:'Aviation Security',text:'This programme comprises both compulsory and elective courses. You may select up to 1 compulsory courses and any elective course based on your profession or areas of interest.' },
  { src: '/assets/images/stackable3.png',title:'Air Traffic Services',text:'This programme comprises both compulsory and elective courses. You may select up to 2 compulsory courses and any elective course based on your profession or areas of interest.' },
];
myInprogressCourses: MyCourse[] = [
  // { src: '/assets/images/course1.png', alt: 'Image 1',text: '2 Months at 5-10 Hrs Per/Week',title:'Personnel Licensing for Regulators',dates:'19 Jun - 23 Aug 2023' },
  // { src: '/assets/images/course4.png', alt: 'Image 4' ,text: '3 Months at 3-4 Hrs Per/Week',title:'Safety Oversight Inspectors',dates:'01 Jun - 15 Oct 2023' },
  // { src: '/assets/images/course5.png', alt: 'Image 5',text: '2 Months at 5-10 Hrs Per/Week' ,title:'Junior Airport Fire Officers',dates:'19 Jun - 23 Aug 2023' },
  // { src: '/assets/images/course7.png', alt: 'Image 7',text: '3 Months at 3-4 Hrs Per/Week' ,title:'State Safety Programme Implementation',dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course2.png', alt: 'Image 2',text: '1 Month at 10 Hrs Per/Week',title:'Aeronautical Search and Rescue Operations',dates:'01 Jun - 30 Jun 2023'  },
  { src: '/assets/images/course3.png', alt: 'Image 3' ,text: '15 Days at 5-10 Hrs Per/Day',title:'Electronics Personnel Communications',dates:'19 Jun - 30 Jun 2023' },
  { src: '/assets/images/course6.png', alt: 'Image 6',text: '3 Months at 3-4 Hrs Per/Week',title:'ICAO PANS-OPS Instrument Procedures',dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course8.png', alt: 'Image 8',text: '4 Days at 3-4 Hrs Per/Day' ,title:'Aviation Security Programme in Public Policy',dates:'19 Jun - 23 Jun 2023' },
];
myPendingCourses: MyCourse[] = [
  { src: '/assets/images/course1.png', alt: 'Image 1',text: '2 Months at 5-10 Hrs Per/Week',title:'Personnel Licensing for Regulators',dates:'19 Jun - 23 Aug 2023' },
  // { src: '/assets/images/course4.png', alt: 'Image 4' ,text: '3 Months at 3-4 Hrs Per/Week',title:'Safety Oversight Inspectors',dates:'01 Jun - 15 Oct 2023' },
  { src: '/assets/images/course5.png', alt: 'Image 5',text: '2 Months at 5-10 Hrs Per/Week' ,title:'Junior Airport Fire Officers',dates:'19 Jun - 23 Aug 2023' },
  // { src: '/assets/images/course7.png', alt: 'Image 7',text: '3 Months at 3-4 Hrs Per/Week' ,title:'State Safety Programme Implementation',dates:'01 Jun - 15 Oct 2023' },
  // { src: '/assets/images/course2.png', alt: 'Image 2',text: '1 Month at 10 Hrs Per/Week',title:'Aeronautical Search and Rescue Operations',dates:'01 Jun - 30 Jun 2023'  },
  // { src: '/assets/images/course3.png', alt: 'Image 3' ,text: '15 Days at 5-10 Hrs Per/Day',title:'Electronics Personnel Communications',dates:'19 Jun - 30 Jun 2023' },
  // { src: '/assets/images/course6.png', alt: 'Image 6',text: '3 Months at 3-4 Hrs Per/Week',title:'ICAO PANS-OPS Instrument Procedures',dates:'01 Jun - 15 Oct 2023' },
  // { src: '/assets/images/course8.png', alt: 'Image 8',text: '4 Days at 3-4 Hrs Per/Day' ,title:'Aviation Security Programme in Public Policy',dates:'19 Jun - 23 Jun 2023' },
];



  navigate(){
    this.router.navigate(['/login']);
  }
  openCourse(data:string){
    this.router.navigate(['/course-detail'],{queryParams:{coursetype:data,}});
  }
  isFirstPage(): boolean {
    return this.currentIndex === 0;
  }
  isFirst(): boolean {
    return this.stackIndex === 0;
  }
  isLastPage(): boolean {
    return this.currentIndex >= this.images.length - this.visibleImages.length;
  }
  isLast(): boolean {
    return this.stackIndex >= this.stackableImage.length - this.stackableImages.length;
  }



}
