import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { EmailValidatorUser } from '../_validators/email.validator';
import { PasswordValidator } from '../_validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['Sincere@4mg.com', [Validators.required, EmailValidatorUser.strong]],
      password: ['gshsA34@j5j',
      [Validators.required,
      , Validators.minLength(8),
      PasswordValidator.strong]]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    const mailvalid = this.f.email.value.split('@');

      let emailProvide = this.userService.getEmailValid()
      .filter(x => x == mailvalid[1]);

      if(!emailProvide.length) {
        this.openSnackBar('Enter Different MailId', '');
        return
      }


    this.loading = true;
   let user = this.authenticationService.login(this.f.email.value, this.f.password.value)
        if(user) {
          this.openSnackBar('Successfully Login', '');
          this.router.navigate([this.returnUrl]);
        } else {
          this.openSnackBar('Enter valid Email or Password', '')
        }
        this.loading = false;
        // .subscribe(
        //     data => {
        //       console.log(data);

        //         this.router.navigate([this.returnUrl]);
        //     },
        //     error => {
        //         this.error = error;

        //         this.loading = false;
        //     });
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,

  });
}
}
