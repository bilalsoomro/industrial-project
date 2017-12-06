import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "admin";
  password = "admin";

  constructor(private router: Router) { }

  // this function is called when the login button is pressed
  // currently has no validation and just redirects to daskboard
  login = function(event) {
    this.router.navigate(['/dashboard/overview']);
  }

  ngOnInit() {
  }

}
