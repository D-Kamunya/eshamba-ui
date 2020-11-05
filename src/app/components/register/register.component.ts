import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


	public user: any;
  constructor(public _userService: UserService) { }

  ngOnInit() {
  	this.user = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password1: ''
      
    }
    this._userService.errors=[]
  }
  registerUser() {
  	console.log(this.user)
    this._userService.registerUser({'username': this.user.username,'first_name': this.user.first_name, 'last_name': this.user.last_name,'email': this.user.email,'password': this.user.password1});
   }

}
