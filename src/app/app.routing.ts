import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { HomeComponent } from './dashboard-main/home/home.component';
import { UsersComponent } from './dashboard-main/users/users.component';
import { EachUserComponent } from './dashboard-main/users/each-user/each-user.component';
   
import { ProductListComponent } from './dashboard-main/product-list/product-list.component';

export const AppRoutes: Routes = [
    
{ path: '',  redirectTo: 'frontpage',  pathMatch: 'full', },

{  path: 'frontpage',  component: FrontpageComponent,
    children: [        
                { path: '',  redirectTo: 'login',  pathMatch: 'full' },
                {  path: 'aboutus',  component: AboutUsComponent, },
                {  path: 'login',  component: LoginComponent, },
                {  path: 'register',  component: RegisterComponent, },
                {  path: 'products',  component: ProductsComponent, },
                {  path: 'contactus',  component: ContactUsComponent, },
              ]
},

{  path: 'dashboard',  component: DashboardMainComponent,
    children: [        
                { path: '',  redirectTo: 'home',  pathMatch: 'full' },
                {  path: 'dash',  component: AboutUsComponent, },
                {  path: 'home',  component: HomeComponent, },
                {  path: 'users',  component: UsersComponent, },
                {  path: 'user/:id',  component: EachUserComponent, },
                {  path: 'productList',  component: ProductListComponent, },
              ]
},


];

