import { Component, OnInit, ViewChild  } from '@angular/core';

import { BaseUtils } from '../../common-service/baseUtils.service';

import { UserService } from '../../_services/user.service';

import { Router ,ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import { GridOptions } from "ag-grid";
import { HttpClientModule } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

// import "ag-grid-enterprise";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userArray: any= [];
  gridOptions: GridOptions;
  columnDefs: any[];
  paginationPageSize: Number;
  rowData: any[];
  defaultColDef : any;
  private gridApi;
  private gridColumnApi;

  @ViewChild('agGrid') agGrid: AgGridNg2; // use to acess the properties of data

  constructor(public router: Router , public userService: UserService, public baseUtils: BaseUtils) {

   }

  // https://jsonplaceholder.typicode.com/posts // for get user data
  ngOnInit() {
    this.columnDefs = [
      {headerName: 'make', field: 'make', checkboxSelection: true },
      {headerName: "User Id", field: "userId",},
      {headerName: "Id", field: "id"},
      {headerName: "Title", field: "title"},
      {headerName: "Body", field: "body"}
    ];
    this.paginationPageSize = 10;
    this.defaultColDef = {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true
    };
    // this.gridOptions.enableColResize = true;
        this.userService.getUsersData("").then( (response)=>{
             this.userArray = response;
             console.log("....Get List...",this.userArray);
             this.rowData = response;
             console.log("....Get List...",this.userArray);
      }
        ).catch((error)=> { console.log(error); })
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.userId + ', ' + node.id+', '+ node.title+ ', ' + node.body +" \n").join(', ');
    console.log(`Selected nodes: ${selectedDataStringPresentation}`);
    // var str = selectedDataStringPresentation.split("\n");
    // console.log("......",str);
}

onPageSizeChanged(event: any) {
  // var value = document.getElementById("page-size");
  var value = event.target.value;
  console.log("....onpagesizechange....",value);
  // this.gridOptions.api.paginationSetPageSize(Number(value));
  this.paginationPageSize = value;
  console.log(this.gridApi.paginationGetPageSize());	

}

onGridReady(event: any){

  console.log(".....onGridReady...event...",event);
}


}


