import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User_Create } from 'src/app/model/user/user-create';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit{

  myForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
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

  formHasError(error: string) {
    return !!this.myForm.hasError(error);
  }

  isTouched(field: string) {
    return this.myForm.get(field).touched;
  }

  hasErrors(field: string) {
    return this.myForm.get(field).errors;
  }

  hasError(field: string, error: string) {
    return !!this.myForm.get(field).hasError(error);
  }

  matchValue: ValidatorFn = (fg: FormGroup) => {
    const password = fg.get('password').value;
    const confirmPassword = fg.get('confirmPassword').value;
    return password === confirmPassword ? null : { isMatching: true };
  }

  onSubmit() {
   /* let applicationUserCreate: User_Create = new User_Create(
      this.myForm.get("firstName").value,
      this.myForm.get("lastName").value,
      this.myForm.get("emailaddr").value,
      this.myForm.get("password").value,
      this.myForm.get("dateofbirth").value,
      this.myForm.get("gender").value,
    );
    

    this.accountService.register(applicationUserCreate).subscribe(() => {
      this.router.navigate(['/profile']);
    })
  }
  */
}
}
