import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../shared/shared/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  isSubmitted = false;

  constructor(private formBuilder:FormBuilder,public utils:UtilsService,private router: Router
    ){
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required,...utils.validators.email]],
        password: ['', [Validators.required]]
      })
  

  }
  onSubmit(){
    if(this.loginForm.valid){
      localStorage.setItem('email',this.loginForm.value.email);
      this.router.navigate(['/dashboard']);

    }
    else{
      this.isSubmitted = true;
    }
  }

}
