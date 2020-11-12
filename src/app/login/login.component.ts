import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  loginSubmit(){
    console.log("Username",this.username);
    console.log("Password",this.password);
  }

}
