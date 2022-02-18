import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryOverviewComponent } from './country-overview/country-overview.component';
import { CountriesGridComponent } from './countries-grid/countries-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component'



@NgModule({
  declarations: [
    CountryOverviewComponent,
    CountriesGridComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,

  ],
  exports: [
    CountryOverviewComponent,
    CountriesGridComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CountriesModule { }
