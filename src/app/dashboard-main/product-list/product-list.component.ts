import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any= [];
  title = 'Products';
  childToParent : any;

  constructor() { }

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(){
    return [
      { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
      { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
      { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
      { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
      { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
  ];
  }

  displayCounter(count){
      this.childToParent = count;
      console.log("In display counter....",count)
  }

  ngOnChanges(){

    console.log("....In parent productList Component ngonchange");
  }


}
