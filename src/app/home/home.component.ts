import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import {Observable, from} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RoutesService } from '../routes/routes.service';

export interface City {
  name: string;
  abbrv: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ RoutesService ]
})
export class HomeComponent implements OnInit {
  @Output() output: string;

  fromControl =  new FormControl('', [Validators.required]);
  toControl =  new FormControl('', [Validators.required]);
  dateControl =  new FormControl('', [Validators.required]);
  cities: City[] = [
    {name: 'Atlanta', abbrv: 'ATL'},
    {name: 'Boston', abbrv: 'BOS'},
    {name: 'Charlotte', abbrv: 'CHR'},
    {name: 'Chicago', abbrv: 'CHI'},
    {name: 'Detroit', abbrv: 'DTR'},
    {name: 'Denver', abbrv: 'DNV'},
    {name: 'Houston', abbrv: 'HOU'},
    {name: 'Los Angeles', abbrv: 'LAX'},
    {name: 'Las Vegas', abbrv: 'LAV'},
    {name: 'New York City', abbrv: 'NYC'},
    {name: 'Miami', abbrv: 'MIA'},
    {name: 'Minneapolis', abbrv: 'MNN'},
    {name: 'Phoenix', abbrv: 'PHX'},
    {name: 'Philadelphia', abbrv: 'PHL'},
    {name: 'San Francisco', abbrv: 'SFS'},
    {name: 'Seattle', abbrv: 'SEA'},
    {name: 'St. Louis', abbrv: 'STL'},
    {name: 'Washington DC', abbrv: 'WDC'},
  ];

  constructor(private router: Router, private routesService: RoutesService) { }

  ngOnInit() { }

  onClick() {
    this.routesService.setParams(this.fromControl.value, this.toControl.value, new Date(this.dateControl.value).getTime());
    this.router.navigateByUrl('/routes');
  }

}
