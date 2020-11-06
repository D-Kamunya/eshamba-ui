import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-crops',
  templateUrl: './manage-crops.component.html',
  styleUrls: ['./manage-crops.component.css']
})
export class ManageCropsComponent implements OnInit {


	public crop:any
  constructor() { }

  ngOnInit() {
  	this.crop={
  		user:localStorage.current_userid,
  		name:'',
  		photo:'',
  		details:''
  	}

  }


  addCrop(){
  	console.log(this.crop)
  }

}
