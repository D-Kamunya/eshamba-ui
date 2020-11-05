import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product-service/product.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public _productService: ProductService) { }

  ngOnInit() {
  	this._productService.getProducts()
  }

}
