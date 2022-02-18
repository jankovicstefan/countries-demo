import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  public country: any;
  public capital = '';
  public tld = '';
  public curencies = '';
  public nativeName: any;
  public languages = '';
  public borderCountries: any;
  public countryName: any;

  constructor(private countriesService: CountriesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.countryName = this.activatedRoute.params.subscribe(param => {
      this.initCountryDetails(param['name']);
    })
  }

  private initCountryDetails(countryName: string) {
    if (countryName != null) {
      this.countriesService.getCountryByName(countryName).subscribe(country => {
        this.country = country[0];
        this.capital = this.country.capital[0];
        this.tld = this.country.tld[0];
        Object.values(this.country.currencies).forEach((curency: any) => {
          this.curencies += curency.name + ', '
        });
        this.curencies = this.curencies.substring(0, this.curencies.length-2);
        this.nativeName = Object.values(this.country.name.nativeName)[0];
        Object.values(this.country.languages).forEach((language: any) => {
          this.languages += language + ', '
        });
        this.languages = this.languages.substring(0, this.languages.length-2);

        this.countriesService.getCountriesByCodes(this.country.borders).subscribe(borderCountries => {
          this.borderCountries = borderCountries;
        })
      })

    }
  }

  public openOnMap() {
    window.open(this.country.maps.googleMaps)
  }

  reload(str: string) {
    this.router.navigate(['/details', str]).then(
      () => {
        window.location.reload()
      }
    )
  }

}
