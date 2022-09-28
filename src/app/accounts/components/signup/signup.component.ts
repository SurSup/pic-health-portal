import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Gender, User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user!: User;
  genders: Gender[] = [
    'Male',
    'Female',
    'Other'
  ];
  submitted: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();
  }

  submit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      console.log('Valid Form');
      let newUser: User = new User(
        form.value['email'],
        form.value['password'],
        form.value['age'],
        form.value['gender']
      );
      this.userService.signupUser(newUser);
      this.router.navigate(['./home/login']);
    } else {
      console.log('Invalid Form');
    }
    console.log(form.value);
  }

  clear(form: NgForm): void {
    form.reset();
    form.resetForm();
    this.submitted = false;
  }
}