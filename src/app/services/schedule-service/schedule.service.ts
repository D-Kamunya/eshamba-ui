import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {



	private httpOptions: any;
  schedules:any
  errors:boolean=false
  usercrops:any
  constructor(private http:HttpClient) { 
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }


  public userCrops() {
    this.http.get(`${environment.api_url}/shamba/api/crops/user/${localStorage.current_userid}`, this.httpOptions).subscribe(
      data => {
        this.usercrops=data
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }


  public getSchedules() {
    this.http.get(`${environment.api_url}/shamba/api/schedule/user/${localStorage.current_userid}`, this.httpOptions).subscribe(
      data => {
        this.schedules=data
        console.log(data)       
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }


  public createSchedule(schedule) {
    this.http.post(`${environment.api_url}/shamba/api/schedule`, schedule, this.httpOptions).subscribe(
      data => {
      	alert('Schedule Created')
      },
      err => {
    
        console.log(err)
          }
    );
  }


  public deleteSchedule(id) {
    this.http.delete(`${environment.api_url}/shamba/api/schedule/${id}`, this.httpOptions).subscribe(
      data => {
      	alert('Schedule deleted')
      	this.getSchedules()
      	console.log(data)
      },
      err => {
    
        console.log(err)
          }
    );
  }
 

}
