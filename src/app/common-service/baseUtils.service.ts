import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import * as CryptoJS from 'crypto-js';
import { ToasterService } from 'angular2-toaster';


@Injectable()
export class BaseUtils {
    public timer: any;
    constructor(public router: Router, public toasterService: ToasterService) {

    }

    ngAfterViewInit() {
    }
    redirectToLogin() {
        localStorage.removeItem('ahsudj234juddd');
        this.router.navigate(['/authentication/login']);
    }

    copyContent(val) {
        let selBox = document.createElement('textarea');

        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;

        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();

        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toasterMessageAction('success', 'Address copied successfully');
    }

    setData(key: string, data: any) {
        key = key.length >0 ? key: 'secret key 123';
        let temp = CryptoJS.AES.encrypt(JSON.stringify(data), key)
        console.log("...key...temp....",key,temp);
        localStorage.setItem(key, temp);
    }

    getData(key: string) {
        let temp = localStorage.getItem(key);
        if (temp) {
            let bytes = CryptoJS.AES.decrypt(temp, 'secret key 123');
            let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decryptedData;
        } else {
            return null
        }
    }

    loading_spinner(val: any) {
        if (val) {
            $(".loading").css("display", "block");
        } else {
            $(".loading").css("display", "none");
        }
    }

    toasterMessageAction(type, message) {
        if (message && message != "success") {
            switch (type) {
                case 'success':
                    this.toasterService.pop(type, 'Success!', message);
                    break;
                case 'error':
                    this.toasterService.pop(type, 'Error!', message);
                    break;
            }
        }
    }

}