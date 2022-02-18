import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public allCountries = [];
  public country: any;

  constructor(private http: HttpClient ) { }

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + 'all');
  }

  public setAllCountries(countires: any) {
    this.allCountries = countires;
  }

  public getAllCountries(): any[] {
    return this.allCountries;
  }

  public setCountry(country: any) {
    this.country = country;
  }

  public getCountry() {
    return this.country;
  }

  public getCountryByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `name/${name}?fullText=true`);
  }

  public getCountriesByCodes(codes: string[]) {
    if (codes) {
      return this.http.get<any[]>(environment.apiUrl + `alpha?codes=${codes}`);
    } else {
      return of([]);
    }
  }


}
