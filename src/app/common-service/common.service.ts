import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { BaseUtils } from "./baseUtils.service";
import { ToasterService } from 'angular2-toaster';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'

@Injectable()
export class CommonService {
    public header;
    constructor(public http: Http, public baseUtils: BaseUtils, public toasterService: ToasterService) {

    }

    sendLoginPostRequest(userInput: any, url: any) {
        let loginHeaders = new Headers({
            'Content-Type': 'application/json'
            // 'Access-Control-Allow-Origin': '*'

        });
        console.log("....sendLoginPostRequest....url is:-",url);
        this.baseUtils.loading_spinner(true);
        return this.http.post(url, userInput, { headers: loginHeaders })
            .toPromise()
            .then(res => {
                this.baseUtils.loading_spinner(false);
                return res.json()
            })
            .catch((error) => {
                this.handleError(error);
            });
    }



    sendPostRequest(userInput: any, url: any) {
        let user: any = this.baseUtils.getData("ahsudj234juddd");
        let authToken = (user) ? user.authToken : "";
        let headers: Headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': authToken
        });
        this.baseUtils.loading_spinner(true);
        return this.http.post(url, userInput, { headers: headers })
            .toPromise()
            .then(res => {
                // console.log("res header is ", res.headers.get('content-type'));
                this.baseUtils.loading_spinner(false);
                return res.json()
            })
            .catch((error) => {
                this.handleError(error);
            });
    }

    sendFilePostRequest(userInput: any, url: any, key) {
        let authToken = key;
        let headers: Headers = new Headers({
            'Authorization': authToken,
            "crossDomain": true,
            "processData": false,
            "contentType": 'multipart/form-data',
        });
        this.baseUtils.loading_spinner(true);
        return this.http.post(url, userInput, { headers: headers })
            .toPromise()
            .then(res => {
                // console.log("res header is ", res.headers.get('content-type'));
                this.baseUtils.loading_spinner(false);
                return res.json()
            })
            .catch((error) => {
                this.handleError(error);
            });
    }

    sendDeleteRequest(url: any) {
        let user: any = this.baseUtils.getData("ahsudj234juddd");
        let authToken = (user) ? user.authToken : "";
        let headers: Headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': authToken
        });
        this.baseUtils.loading_spinner(true);
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(res => {
                this.baseUtils.loading_spinner(false);
                return res.json()
            })
            .catch((error) => {
                this.handleError(error);
            });

    }

    sendGetRequest(url: any) {
        let user: any = this.baseUtils.getData("ahsudj234juddd");
        let authToken = (user) ? user.authToken : "";
        let headers: Headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': authToken
        });
        this.baseUtils.loading_spinner(true);
        return this.http.get(url, { headers: headers })
            .toPromise()
            .then(res => {
                this.baseUtils.loading_spinner(false);
                return res.json()
            })
            .catch((error) => {
                this.handleError(error);
            });
    }

    sendPutRequest(userInput: any, url: any) {
        let user: any = this.baseUtils.getData("ahsudj234juddd");
        let authToken = (user) ? user.authToken : "";
        let headers: Headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': authToken
        });
        this.baseUtils.loading_spinner(true);
        return this.http.put(url, userInput, { headers: headers })
            .toPromise()
            .then(res => {
                this.baseUtils.loading_spinner(false);
                return res.json()
            })
            .catch((error) => {
                this.handleError(error);
            });

    }

    handleError(error) {
        this.baseUtils.loading_spinner(false);
        let errorBody = error._body;

        // error body doesn't contains html
        if (!/<[a-z][\s\S]*>/i.test(errorBody)) {
            error = error.json();
        }

        console.log('Global Network Call Handling - ', error);

        switch (error.status) {
            case 0:
                this.toasterService.pop('error', 'Error!', "Connection to the server unsuccessful.");

                break;

            case 401:
                this.toasterService.pop('error', 'Error!', "Your session time has expired, please log in again");
                this.baseUtils.redirectToLogin();
                break;

            case 404:
                this.toasterService.pop('error', 'Error!', "Requested resource not found");
                break;
            default:
                this.toasterService.pop('error', 'Error!', "There is a problem processing your request. Please try again later.");
        }

        throw error;
    }

}