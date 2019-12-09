import { Component, OnInit } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signIn() {
    window.alert('Sign In successful!');
    window.location.reload();
  }

  signUp() {
    window.alert('Sign Up successful!');
    window.location.reload();
  }
}
