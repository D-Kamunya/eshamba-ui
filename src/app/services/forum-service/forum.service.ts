
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

	// http options used for making API calls
  private httpOptions: any;
  posts:any
  errors:boolean=false
  

  constructor(private http:HttpClient,private router:Router) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }


  public getPosts() {
    this.http.get(`${environment.api_url}/shamba/api/post`, this.httpOptions).subscribe(
      data => {
        this.posts=data
        console.log(data)       
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }



  public createPost(post) {
    this.http.post(`${environment.api_url}/shamba/api/post`, post, this.httpOptions).subscribe(
      data => {
        this.router.navigate(['/forum'])
      },
      err => {
      	console.log(typeof(post))
        console.log(err)
          }
    );
  }
 


 
}
