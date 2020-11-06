import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import {ScheduleService} from '../schedule-service/schedule.service';


@Injectable({
  providedIn: 'root'
})
export class CropService {


	// http options used for making API calls
  private httpOptions: any;
  userCrops:any
  errors:boolean=false
  constructor(private http:HttpClient,public _scheduleService: ScheduleService) {
   this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }




  public addCrop(crop) {
    this.http.post(`${environment.api_url}/shamba/api/crop`, crop, this.httpOptions).subscribe(
      data => {
        this._scheduleService.userCrops()
       	alert('Crop added successfully')
      },
      err => {
      	this.errors=true
        console.log(err)
          }
    );
  }




	 public addActivity(activity) {
	  this.http.post(`${environment.api_url}/shamba/api/crop_activity`, activity, this.httpOptions).subscribe(
	    data => {
	     	alert('Crop activity added successfully')
	    },
	    err => {
	    	this.errors=true
	      console.log(err)
	        }
	  );
	}

}
