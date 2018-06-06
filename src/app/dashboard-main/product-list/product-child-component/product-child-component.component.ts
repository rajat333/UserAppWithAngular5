import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-product-child-component',
  // templateUrl: './product-child-component.component.html',
  template: `<p>
              product-child-component works!
            </p>
            <button class='btn btn-primary' (click)="valueChangedddd()">Click me</button>
            `,
  styleUrls: ['./product-child-component.component.css']
})
export class ProductChildComponentComponent implements OnInit {

   @Output() valueChange = new EventEmitter();
    counter = 0;
  constructor() { }

  ngOnInit() {
  }

  handleclick(){
    console.log("..In product child component on button click");
  }

  valueChangedddd(){
     this.counter = this.counter + 1 ; 
    console.log("....In valueChangedddd function....")
    // output property func emot func call
    this.valueChange.emit("Welcome" + this.counter);

  }
}
