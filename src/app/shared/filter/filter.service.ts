import { Injectable } from '@angular/core';
import { Subject, filter } from 'rxjs';
import { Region } from './region.enum';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private dropdownFilterSubject = new Subject<string>();
  public dropdownFilter = this.dropdownFilterSubject.asObservable();
  private inputSearchSubject = new Subject<string>();
  public inputSearch = this.inputSearchSubject.asObservable();
  private filterSubject = new Subject<any>();
  public filterCriteria = this.filterSubject.asObservable();

  constructor() {

  }

  public filterCountries(searchCriteria: any) {
    this.filterSubject.next(searchCriteria);
  }

  public filterByRegion(selectedOption: string) {
    this.dropdownFilterSubject.next(selectedOption);
  }

  public searchByName(name: string) {
    this.inputSearchSubject.next(name);
  }
}
