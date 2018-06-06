import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stockexchange',
  // templateUrl: './stockexchange.component.html',
  template : `  
  <input type='number' [(ngModel)]='updatedstockvalue'/> <button class='btn btn-primary'
  [style.background]='color'
  (click)="stockValueChanged()">Change Stock Value</button> 
  `,
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  @Input() stock: number;
  @Input() productId: number;

  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue : Number;

  constructor() { }

  ngOnInit() {
  }

  stockValueChanged(){
    console.log("...In stockChange function inside..",this.stock,this.productId,this.updatedstockvalue);
    this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue, stock: this.updatedstockvalue });
    // this.updatedstockvalue = null;
    if (this.stock > 10) {
          this.color = 'green';
      } else {
          this.color = 'red';
      }
      
  }

  ngOnChanges(){
      console.log("...In NgOnChange....");
      if (this.stock > 10) {
        this.color = 'green';
    } else {
        this.color = 'red';
    }

  }


}
