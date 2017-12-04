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

  login = function() {
    // alert('hello');
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
