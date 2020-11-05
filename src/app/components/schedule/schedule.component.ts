import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


	public schedule:any
  constructor() { }

  ngOnInit(){
  	this.schedule={
  		crop:'',
  		name:'',
  		details:'',
  		date:'',
  	}

  }
  createSchedule(){
  	console.log(this.schedule)
  }

}
