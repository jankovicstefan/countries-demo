import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { FilterService } from './filter.service';
import { Region } from './region.enum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterForm = new FormGroup({
    search: new FormControl(''),
    select: new FormControl('',),
  });


  constructor(private filterService: FilterService) {
    this.filterForm.controls['select'].setValue('All');
  }


  public regionFilterValues = Object.values(Region);

  ngOnInit(): void {
  }

  filterByRegion(event: any) {
    const selectedOption = event.target.value;
    this.filterService.filterByRegion(selectedOption);
  }

  searchCountries(event: any) {
    const searchText = event.target.value;
    console.log(searchText);
    this.filterService.searchByName(searchText);
  }

  filterChanged() {
    this.filterService.filterCountries({
      search: this.filterForm.get('search')?.value,
      select: this.filterForm.get('select')?.value
    });
  }


}
