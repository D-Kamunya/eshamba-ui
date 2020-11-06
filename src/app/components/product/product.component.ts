import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product-service/product.service'
import {ScheduleService} from '../../services/schedule-service/schedule.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	public recommendation: any;
	public product: any;

  constructor(public _productService: ProductService,public _scheduleService: ScheduleService) { }

  ngOnInit() {
  	this._productService.getProducts()
  	this.recommendation={
  		user:localStorage.current_userid,
  		product:'',
  		rec_crops:''
  	}
  	this.product={
  		product:localStorage.recprd,
  		crop:''
  	}
  	this._scheduleService.userCrops()
  }

  recProduct(){
  	this._productService.recProduct(this.recommendation)
  }
  setPrdId(id){
  	this.recommendation.product=id
  }
  saveProduct(){
  	this._productService.saveProduct(this.product)
  }
}
