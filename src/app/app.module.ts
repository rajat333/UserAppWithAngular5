import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToasterContainerComponent, ToasterModule, ToasterService } from 'angular2-toaster';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CalendarModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';

import { SelectModule } from 'ng2-select';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AppRoutes } from './app.routing';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { AuthService } from './_services/auth.service';
import { CommonService } from './common-service/common.service';
import { BaseUtils } from './common-service/baseUtils.service';
import { CardHoverDirective } from './_directive/cardhover.directive'
import { EmailValidatorDirective } from './_directive/email-validator.directive';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { UsersComponent } from './dashboard-main/users/users.component';
import { EachUserComponent } from './dashboard-main/users/each-user/each-user.component';
import { HomeComponent } from './dashboard-main/home/home.component';

import { UserService } from './_services/user.service';
import {AgGridModule} from "ag-grid-angular/main";
// import { HttpClientModule } from '@angular/common/http';
// AgGridModule.withComponents([])
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material";
import { ProductListComponent } from './dashboard-main/product-list/product-list.component';
import { StockChangeComponent } from './dashboard-main/product-list/stock-change/stock-change.component';
import { ProductChildComponentComponent } from './dashboard-main/product-list/product-child-component/product-child-component.component';
import { StockexchangeComponent } from './dashboard-main/product-list/stockexchange/stockexchange.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { LOCALE_ID, NgModule,  TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
// import {ToasterContainerComponent, ToasterService, ToasterModule }  from 'angular2-toaster';
// import translations from '../locale/messages.es.xlf';
// const localeId = 'fr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FrontpageComponent,
    RegisterComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    TabBarComponent,
    CardHoverDirective,
    EmailValidatorDirective,
    DashboardMainComponent,
    UsersComponent,
    EachUserComponent,
    HomeComponent,
    ProductListComponent,
    StockChangeComponent,
    ProductChildComponentComponent,
    StockexchangeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    SelectModule,
    FileUploadModule,
    CalendarModule,
    ProgressBarModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, 
    MatSortModule,
    MatTableModule,
    AgGridModule,
    AgGridModule.withComponents([ UsersComponent ]),
    ToasterModule,
    NoopAnimationsModule
  ],
  providers: [ AuthService,     
               CommonService,
               ToasterService,
               BaseUtils,
               UserService,
               ToasterService,
               { provide: LOCALE_ID, useValue: 'es' }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
