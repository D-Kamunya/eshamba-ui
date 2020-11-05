import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../services/schedule-service/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


	public schedule:any
  constructor(public _scheduleService: ScheduleService) { }

  ngOnInit(){
  	this.schedule={
  		crop:'',
  		user:localStorage.current_userid,
  		name:'',
  		details:'',
  		schedule_date:new Date(),
  	}
  	this._scheduleService.userCrops()
  	this._scheduleService.getSchedules()

  }
  createSchedule(){
  	console.log(this.schedule)
  	this._scheduleService.createSchedule(this.schedule)
  }

}
