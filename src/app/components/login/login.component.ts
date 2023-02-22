import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { filter, Subject, takeUntil } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { User_Login } from 'src/app/model/user/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myForm: FormGroup;
  hide:boolean=true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    //if (this.accountService.isLoggedIn()) {
     // this.router.navigate(['/dashboard']);
    //}
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: [null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]]
    });
  }

  isTouched(field: string){
    return this.myForm.get(field).touched;
  }

  hasErrors(field: string) {
    return this.myForm.get(field).errors;
  }

  hasError(field: string, error: string) {
    return !!this.myForm.get(field).hasError(error);
  }

  onSubmit() {
    let userLogin: User_Login = new User_Login(
      this.myForm.get("username").value,
      this.myForm.get("password").value
    );

    //this.accountService.login(userLogin).subscribe(() => {
      //this.router.navigate(['/profile']);
    //});
  }


















  /*
  myForm!: FormGroup;
 hide:boolean=true;
 isUserLoggedIn:boolean=false;
 private readonly _destroy=new Subject<void>();
  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig:MsalGuardConfiguration,
  private msalBroadCastService:MsalBroadcastService,private authService:MsalService,private azureService:AzureAdService) {

  }

  ngOnInit():void {
    this.msalBroadCastService.inProgress$.pipe(
      filter((interactionStatus:InteractionStatus)=>
      interactionStatus==InteractionStatus.None),
      takeUntil(this._destroy))
      .subscribe(x=>
        {
          this.isUserLoggedIn=this.authService.instance.getAllAccounts().length>0
          this.azureService.isUserLoggedIn.next(this.isUserLoggedIn);
        })
}

ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
}

login(){
  if(this.msalGuardConfig.authRequest)
  {
    this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest)
  }
  else{
    this.authService.loginRedirect();
  }
}



get email() {
  return this.myForm.get('email');
}

get password() {
  return this.myForm.get('password');
}
*/
}
