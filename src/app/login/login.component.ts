import { Component, OnInit, ViewChild ,NgModule } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { NgForm, Validator, Validators } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { CalendarModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';

import { CardHoverDirective } from '../_directive/cardhover.directive';
import { EmailValidatorDirective } from '../_directive/email-validator.directive';
import { EmailValidator } from '@angular/forms';

import { BaseUtils } from '../common-service/baseUtils.service';
// import { SelectModule } from 'ng2-select';
import {  ToasterService } from 'angular2-toaster';

// import { NgModule } from '@angular/core';

class LoginData {
  email: string;
  password: string;
  filetoupload: File =null ;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
   
  @ViewChild('loginForm') public loginForm;
  public loginData: LoginData;
  // public email:["", [Validators.required, EmailValidator]] ;
  constructor(public authService: AuthService, public router: Router, public baseUtils: BaseUtils, public toasterService: ToasterService ) {
    this.loginData = new LoginData();
    console.log("......baseUtils....",baseUtils);
   }

  ngOnInit() { 
  }


  submitLogin(){
    let that= this;
           console.log(".....In submitLogin....Section", this.loginData);
        let temp: any = Object.assign({}, this.loginData);
       this.authService.submitLogin(temp).then(function(response){
            console.log(".....Response is.......",response); 
            // console.log("......baseUtils.....",this.baseUtils,BaseUtils);
            that.baseUtils.setData("Welcome",response);
            // this.router.navigateTo('');
            that.toasterService.pop('success', 'Args Title', 'Args Body');
            that.router.navigate(['dashboard']);
        },function(error){
          console.log(".....Error is.......",error);
        });

  }

  selectedFileName(event, type) {
    console.log("..Event is...",event);
    if (event.files[0].size > 5000000) {
      // this.baseUtils.toasterMessageAction("error", "File size should be max 5 mb.");
      console.log("......File Size Exceeded....");
      return;
    }
    if (event.files[0].type == "image/jpeg" || event.files[0].type == "image/png" || event.files[0].type == "application/pdf") {

    } else {
      // this.baseUtils.toasterMessageAction("error", "Only jpg, jpeg, pdf and png images are allowed.");
       console.log(".....Not an Image File....."); 
      return;
    }
    if (type == 'addressProof') {
      this.loginData.filetoupload = event.files[0].name;
    } else {
      this.loginData.filetoupload = event.files[0].name;
    }

    console.log(".......this.loginData.filetoupload.....",this.loginData.filetoupload);
  }
  
}
