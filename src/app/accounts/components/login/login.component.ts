
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: User;
  public hide: boolean = true;
  submitted: boolean = false;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public form!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.user = new User();
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),
      password: new FormControl('', [Validators.required ])
      // password: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern(
      //     '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      //   ),
      // ]),
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  submit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Valid Form', this.form);
      let user = new User(this.form.value['email'], this.form.value['password']);
      this.userService.loginUser(user);
    } else {
      console.log('Invalid Form');
    }
    console.log(this.form.value);
    this.router.navigate(['./matCardDashboard']);
  }

  clear(): void {
    this.form.reset();
    this.submitted = false;
  }

  gotoMatcardDashboard(): any {
    // this.http.get('http://localhost:5011', this.httpOptions).subscribe((res) =>
    //   console.log('==== Response from Server =====', res)
    // );
    this.router.navigate(['./matCardDashboard']);
  }
}