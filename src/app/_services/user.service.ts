import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import * as CryptoJS from 'crypto-js';
import { ToasterService } from 'angular2-toaster';
import { CommonService } from '../common-service/common.service';
import {  config } from '../../environments/environment';
import { URLS } from  '../constants/app.constant';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http'
//  import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
//     MatSortModule, MatTableModule } from "@angular/material";

@Injectable()
export class UserService{

    public loginUrl = URLS.loginUrl;

    public timer: any;
    constructor(public router: Router, public toasterService: ToasterService, public commonService : CommonService) {

    } 

    getUsersData(data) {
        let url = config.host + this.loginUrl;
        url = "https://jsonplaceholder.typicode.com/posts";
       
        return this.commonService.sendGetRequest(url).then(response => {
            return response;
        }).catch((err) => {
        });
    }
}