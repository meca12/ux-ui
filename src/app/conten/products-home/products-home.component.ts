import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products.model';
import { StockService } from 'src/app/service/stock.service';





@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {

constructor(private stockService : StockService ) { }

  ngOnInit(): void {
    this.stockService.loadStock()
     .subscribe( resp =>{console.log(resp)});
  }


}
