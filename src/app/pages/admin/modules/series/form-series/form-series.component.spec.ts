import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeriesComponent } from './form-series.component';

describe('FormSeriesComponent', () => {
  let component: FormSeriesComponent;
  let fixture: ComponentFixture<FormSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
