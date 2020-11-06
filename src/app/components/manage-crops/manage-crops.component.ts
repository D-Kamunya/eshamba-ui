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
  constructor(public _cropService: CropService,public _scheduleService: ScheduleService) { }

  ngOnInit() {
  	this.crop={
  		user:localStorage.current_userid,
  		name:'',
  		photo:'',
  		details:''
  	}
  	this._scheduleService.userCrops()
  }


  addCrop(){
  	this._cropService.addCrop(this.crop)
  }

}
