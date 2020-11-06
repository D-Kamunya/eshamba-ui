import { Component, OnInit } from '@angular/core';
import {CropService} from '../../services/crop-service/crop.service';
import {ScheduleService} from '../../services/schedule-service/schedule.service';
@Component({
  selector: 'app-manage-crops',
  templateUrl: './manage-crops.component.html',
  styleUrls: ['./manage-crops.component.css']
})
export class ManageCropsComponent implements OnInit {


	public crop:any
	public activity:any
  constructor(public _cropService: CropService,public _scheduleService: ScheduleService) { }

  ngOnInit() {
  	this.crop={
  		user:localStorage.current_userid,
  		name:'',
  		photo:'',
  		details:''
  	}
  	this.activity={
  		crop:'',
  		activity:''
  	}
  	this._scheduleService.userCrops()
  }


  addCrop(){
  	this._cropService.addCrop(this.crop)
  }
  setCrpId(id){
  	this.activity.crop=id
  }
  addActivity(){
  	this._cropService.addActivity(this.activity)
  }

}
