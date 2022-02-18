import { CountriesGridComponent } from './countries/countries-grid/countries-grid.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CountriesGridComponent },
  { path: 'details/:name', component: CountryDetailsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
