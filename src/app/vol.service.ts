import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class VolService {
    constructor(private http: Http) {
    }

    add(object): any {

        return this.http.post('http://api-vol-velo/vols', object)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getData(city): any {

        return this.http.get('http://api-vol-velo/vols/' + city)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }
}
