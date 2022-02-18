import { debounceTime, distinctUntilChanged, filter, flatMap, map, Subscription, switchMap } from 'rxjs';
import { CountriesService } from './../countries.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterService } from '../../shared/filter/filter.service';

@Component({
  selector: 'app-countries-grid',
  templateUrl: './countries-grid.component.html',
  styleUrls: ['./countries-grid.component.css']
})
export class CountriesGridComponent implements OnInit, OnDestroy {

  public countries: any[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private countriesService: CountriesService, private filterService: FilterService) { }


  ngOnInit(): void {
    this.countriesService.getAll().subscribe(countries => {
      this.countriesService.setAllCountries(countries);
      console.log(countries);
      this.countries = countries;
    });

    this.subscription = this.filterService.filterCriteria.subscribe(filters => {
      console.log(filters);
      if (filters.search === '' && filters.select === 'All') {
        this.countries = this.countriesService.getAllCountries();
      } else if (filters.search === '' && filters.select !== 'All') {
        this.countries = this.countriesService.getAllCountries().filter(country => {
          return country.region == filters.select;
      })} else if (filters.search !== '' && filters.select === 'All') {
        this.countries = this.countriesService.getAllCountries().filter(country => {
          const countryName: string = country.name.common;
          return countryName.toLocaleLowerCase()
                  .includes(filters.search.toLocaleLowerCase());
      })} else {
        this.countries = this.countriesService.getAllCountries().filter(country => {
          const countryName: string = country.name.common;
          return countryName.toLocaleLowerCase()
                  .includes(filters.search.toLocaleLowerCase()) && country.region == filters.select;
      })}
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
