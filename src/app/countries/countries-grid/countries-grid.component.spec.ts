import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesGridComponent } from './countries-grid.component';

describe('CountriesGridComponent', () => {
  let component: CountriesGridComponent;
  let fixture: ComponentFixture<CountriesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
