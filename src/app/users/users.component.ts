import { Component, OnInit } from '@angular/core';
import { Iusers } from './model/iusers';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Iusers[];
  errorMsg: any;

  constructor(private userServices: UsersService) { }

  ngOnInit(): void {
    this.userServices.getUsers().subscribe({
      next: users => {
        console.log("en el onit", users);
        this.users = users ;
      },
      error: err => err
    });

  }

}
