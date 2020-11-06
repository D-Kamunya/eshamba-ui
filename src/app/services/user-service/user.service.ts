import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

	// http options used for making API calls
  private httpOptions: any;
 
  // the actual JWT token
  public token: string;

	// the  JWT refresh token
  public refresh: string;
 
  // the token expiration date
  public token_expires: Date;
 
  // the username of the logged in user
  public user_id: number;
 
  // error messages received from the login attempt
  public errors: any = [];

  

  constructor(private http:HttpClient,private router:Router) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }

  // Uses http.post() to get an auth token from drf-jwt endpoint
  public login(user) {
    this.http.post(`${environment.api_url}/api/token/`, JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['access'],);
        this.refresh=data['refresh']
        this.router.navigate(['/products'])
        
      },
      err => {
        this.errors =[err.error.detail]
          }
    );
  }
 


 public registerUser(user) {
    this.http.post(`${environment.api_url}/account/api/register`, JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        alert('User registered successfully')
        this.router.navigate(['/login'])
       
      },
      err => {
        this.errors =[err.error]
          }
    );
  }
  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http.post(`${environment.api_url}/api/token/refresh/`, JSON.stringify({refresh: this.refresh}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['access']);
      },
      err => {
        this.errors = [err.error.detail]
      }
    );
  }
 
  public logout() {
    this.token = null;
    this.token_expires = null;
    this.user_id = null;
    this.router.navigate(['/login'])
  }
 
  private updateData(token) {
    this.token = token;
    this.errors = [];
 
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.user_id = token_decoded.user_id;
    localStorage.current_userid=this.user_id

    this.http.get(`${environment.api_url}/account/api/user/${token_decoded.user_id}`, this.httpOptions).subscribe(
      data => {
        localStorage.current_user=data

      },
      err => {
        console.log(err)
          }
    );




  }
 
}
