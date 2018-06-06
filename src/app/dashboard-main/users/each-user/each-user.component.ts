import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-each-user',
  templateUrl: './each-user.component.html',
  styleUrls: ['./each-user.component.css']
})
export class EachUserComponent implements OnInit {

  id: String;

  constructor(public route: ActivatedRoute ) { 

    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(".....eachwork....",this.id);
  }

}
