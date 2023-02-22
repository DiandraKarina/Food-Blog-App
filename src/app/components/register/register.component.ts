import { ListKeyManager } from '@angular/cdk/a11y';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { User_Create } from 'src/app/model/user/user-create';

import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm!: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder,private users:UsersService) {

  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailaddr: ['', [Validators.required, Validators.email]],
      //blogName: ['', [Validators.required]],
      dob:[
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(14),
          Validators.max(65),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$'),
        ],
      ],
      gender: ['']
    });
  }
  /*public validateControl = (controlName: string) => {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.myForm.get(controlName).hasError(errorName)
  }
  public registerUser = (registerFormValue) => {
    const formValues = { ...registerFormValue };
    const user: User_Create = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      emailaddr: formValues.emailaddr,
      password: formValues.password,
      dateofbirth:formValues.dateofbirth,
      gender: formValues.gender
    };
    this.authService.registerUser("api/accounts/registration", user)
    .subscribe({
      next: (_) => console.log("Successful registration"),
      error: (err: HttpErrorResponse) => console.log(err.error.errors)
    })
  }
  
  registerSubmitted(){
    console.log(this.myForm.value);
    this.users.createUser(this.myForm.value).subscribe(res=>{
      console.log(res);
    })
    */
    /*
    this.authService.registerUser([
      this.myForm.value.firstName,
      this.myForm.value.lastName,
      //this.myForm.value.blogName,
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.dob,
      this.myForm.value.gender
    ]).subscribe(res=>{console.log(res);
    })
    */
  }
  /*
  get firstName() {
    return this.myForm.get('firstName');
  }
  get lastName() {
    return this.myForm.get('lastName');
  }

  get blogName() {
    return this.myForm.get('blogName');
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
  */


  //get dateOfBirth() {
  //  if(this.myForm.get('dob') !=null)
   //  return this.myForm.get('dob').value || new Date()}


  //get age() {  return new Date().getFullYear() - this.dateOfBirth.getFullYear()}


