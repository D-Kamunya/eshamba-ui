import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product-service/product.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	public recommendation: any;


  constructor(public _productService: ProductService) { }

  ngOnInit() {
  	this._productService.getProducts()
  	this.recommendation={
  		user:localStorage.current_userid,
  		product:localStorage.recprd,
  		rec_crops:''
  	}
  }

  recProduct(){
  	this._productService.recProduct(this.recommendation)
  }
  setPrdId(id){
  	localStorage.recprd=id
  }
}
