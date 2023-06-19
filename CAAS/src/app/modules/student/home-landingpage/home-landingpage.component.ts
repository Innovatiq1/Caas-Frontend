import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home-landingpage',
  templateUrl: './home-landingpage.component.html',
  styleUrls: ['./home-landingpage.component.css']
})
export class HomeLandingpageComponent {
  
  
  constructor(private router: Router) {}
  navigateTo(route : string){
    this.router.navigate(['profile', route])
  }
}

