import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductService {



  private httpOptions: any;
  products:any
  errors:boolean=false
  


  constructor(private http:HttpClient) {
	  this.httpOptions = {
	      headers: new HttpHeaders({'Content-Type': 'application/json'})
	    }
  }



    public getProducts() {
    this.http.get(`${environment.api_url}/shamba/api/product`, this.httpOptions).subscribe(
      data => {
        this.products=data
        console.log(data)       
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }


  public recProduct(rec) {
    this.http.post(`${environment.api_url}/shamba/api/product_recommendations`, rec, this.httpOptions).subscribe(
      data => {
       	alert('Recommendation added')
      },
      err => {
        console.log(err)
          }
    );
  }
 
}
