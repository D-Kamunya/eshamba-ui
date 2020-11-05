import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {

	// http options used for making API calls
  private httpOptions: any;
 
  // the actual JWT token
  public token: string;

	// the  JWT refresh token
  public refresh_token: string;
 
  // the token expiration date
  public token_expires: Date;
 
  // the username of the logged in user
  public user_id: number;
 
  // error messages received from the login attempt
  public errors: any = [];

  

  constructor(private http:HttpClient) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }

  // Uses http.post() to get an auth token from drf-jwt endpoint
  public login(user) {
    this.http.post(`${environment.api_url}/api/token/`, JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['access']);
        this.refresh_token=data['refresh']
        console.log(data)
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
 
  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http.post(`${environment.api_url}/api/token/refresh/`, JSON.stringify({token: this.refresh_token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
 
  public logout() {
    this.token = null;
    this.token_expires = null;
    this.user_id = null;
  }
 
  private updateData(token) {
    this.token = token;
    this.errors = [];
 
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.user_id = token_decoded.user_id;
  }
 
}
