import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PollutionService {
    constructor (private http: Http) {}
    getData(city): any {

        return this.http.get('http://api-pollution/pollutions/' + city, )
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }
}
