import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PollutionService} from './pollution.service';
import {MeteoService} from './meteo.service';
import {AlertService} from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PollutionService, MeteoService, AlertService]
})


export class AppComponent {
    cityForm: FormGroup;
    pollutionService;
    meteoService;
    alertService;
    results;
    resultsMeteo;
    resultAlert;

    constructor(formBuilder: FormBuilder, pollutionService: PollutionService, meteoService: MeteoService, alertService: AlertService) {
        this.cityForm = formBuilder.group({
            city: formBuilder.control(''),
        });
        this.pollutionService = pollutionService;
        this.meteoService = meteoService;
        this.alertService = alertService;
    }

    save() {
        this.pollutionService.getData(this.cityForm.value.city).then(rep => this.results = rep);
        this.meteoService.getData(this.cityForm.value.city).then(rep => this.resultsMeteo = rep);
        this.alertService.getData(this.cityForm.value.city).then(rep => this.resultAlert = rep);
    }

}
