import { Component, OnInit } from '@angular/core';

import { User } from './../../_models/user';
import { UserService } from './../../_services/user.service';
import { AuthenticationService } from './../../_services/authentication.service';


@Component({
  moduleId: module.id,
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  token="";
  currentUser: User[];
  users: User[]= [];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = JSON.parse(localStorage.getItem('token'));
   }

  ngOnInit() {
    this.getUser();
  }

  private getUser(){
    this.authenticationService.getUsers(this.token).subscribe(user => { 
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

}
