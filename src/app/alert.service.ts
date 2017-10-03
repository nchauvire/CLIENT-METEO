import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AlertService{
    constructor (private http: Http) {}
    getData(city): any {

        return this.http.get('http://api.alert-meteo/alerte-meteo/' + city, )
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }
}
