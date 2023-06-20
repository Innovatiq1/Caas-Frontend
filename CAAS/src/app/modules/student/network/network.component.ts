import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent {
  constructor(private router: Router) {}
  navigateTo(route : string){
    if(route == 'profile'){
    this.router.navigate(['/profile'])
    } else if(route == 'courses'){
      this.router.navigate(['/courses'])

    }else if(route == 'network'){
      this.router.navigate(['/network'])

    }
  }
}
