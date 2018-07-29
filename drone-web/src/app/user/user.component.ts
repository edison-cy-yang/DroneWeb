import { Component, OnInit, Output } from '@angular/core';
import { UserService } from './userService/userService';
import { UserModel } from '../models/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userModel: UserModel;

  constructor(userService: UserService) {
    this.userModel = userService.getUserInfo();
  }
  ngOnInit() {
  }

}
