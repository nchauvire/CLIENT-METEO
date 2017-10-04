import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PollutionService} from './pollution.service';
import {MeteoService} from './meteo.service';
import {AlertService} from './alert.service';
import {VolService} from './vol.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PollutionService, MeteoService, AlertService, VolService]
})


export class AppComponent {
    cityForm: FormGroup;
    volForm: FormGroup;
    pollutionService;
    meteoService;
    alertService;
    results;
    resultsMeteo;
    resultAlert;
    volService;

    constructor(formBuilder: FormBuilder, pollutionService: PollutionService, meteoService: MeteoService, alertService: AlertService, volService: VolService) {
        this.cityForm = formBuilder.group({
            city: formBuilder.control(''),
        });

        this.volForm = formBuilder.group({
            name: formBuilder.control(''),
            description: formBuilder.control(''),
            phone: formBuilder.control(''),
        });
        this.pollutionService = pollutionService;
        this.meteoService = meteoService;
        this.alertService = alertService;
        this.volService = volService;
    }

    save() {
        this.pollutionService.getData().then(rep => this.results = rep);
        this.meteoService.getData(this.cityForm.value.city).then(rep => this.resultsMeteo = rep);
        this.alertService.getData(this.cityForm.value.city).then(rep => this.resultAlert = rep);
    }

    saveVol() {
        this.volService.add(this.volForm.value).then((rep => this.resultsMeteo = rep));
    }
}
