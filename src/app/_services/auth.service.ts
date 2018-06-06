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

@Injectable()
export class AuthService{

    public loginUrl = URLS.loginUrl;

    public timer: any;
    constructor(public router: Router, public toasterService: ToasterService, public commonService : CommonService) {

    } 

    submitLogin(data) {
        let url = config.host + this.loginUrl;
        url = "https://jsonplaceholder.typicode.com/posts";
        data.title = 'foo';
        data.body = 'bar';
        data.userId = 1;
        console.log("....submit...login...url is:-",url);
        console.log("......logindata...",data);
        return this.commonService.sendLoginPostRequest(data, url).then(response => {
            return response;
        }).catch((err) => {
        });
    }
}