import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-overview',
  templateUrl: './country-overview.component.html',
  styleUrls: ['./country-overview.component.css']
})
export class CountryOverviewComponent implements OnInit {

  @Input()
  country: any;

  public countryName = '';

  constructor() { }

  ngOnInit(): void {
    this.countryName = this.country.name.common;
  }
}
