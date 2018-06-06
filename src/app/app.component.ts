import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {ToasterModule, ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'khurana-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages = [
    { code: 'en', label: 'English'},
    { code: 'es', label: 'Español'},
    { code: 'fr', label: 'Français'}
  ];
public config: ToasterConfig = new ToasterConfig({ animation: 'flyLeft', 
                                                    limit: 5 });

constructor(@Inject(LOCALE_ID) protected localeId: string){


}

 }