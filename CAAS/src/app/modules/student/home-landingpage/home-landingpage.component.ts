import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home-landingpage',
  templateUrl: './home-landingpage.component.html',
  styleUrls: ['./home-landingpage.component.css']
})
export class HomeLandingpageComponent implements OnInit {
  email: string | null;
  isEmail = false;
  
  
  constructor(private router: Router) {
    this.email =localStorage.getItem('email');
    if(this.email){
      this.isEmail = true;
    }
  }
  navigateTo(route : string){
    if(route == 'profile'){
      this.router.navigate(['/profile'])
      } else if(route == 'courses'){
        this.router.navigate(['/courses'])
      } else if(route == 'network'){
        this.router.navigate(['/network'])
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

