import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from '../../../../node_modules/rxjs';
import { UserModel } from '../../models/userModel';

@Injectable()
export class UserService {
//private httpclient here
  constructor () {}

  //need to make http request using RXJS to get the userModel
  //maybe need some user Conversion class
  public getUserInfo(): UserModel {
    return this.createTemporaryUser();
  }

  private createTemporaryUser(): UserModel {
      return new UserModel(
          'fakeUser',
          'awesomeCorp', 'Edi', 'Yang', 'Software engineer', 'hiking, yez', 'http://i.imgur.com/vP6fahI.jpg');
  }
}
