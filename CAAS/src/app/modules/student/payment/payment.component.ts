import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder,private router: Router) {}
  navigateTo(route : string){
    if(route == 'profile'){
      this.router.navigate(['/profile'])
      } else if(route == 'courses'){
        this.router.navigate(['/courses'])
      }
    }
    navigate(){
      this.router.navigate(['/course-detail'])
    }
    // next(){
    //   this.selectedIndex=3;
    // }

}
