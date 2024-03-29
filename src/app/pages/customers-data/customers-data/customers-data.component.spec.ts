import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDataComponent } from './customers-data.component';

describe('CustomersDataComponent', () => {
  let component: CustomersDataComponent;
  let fixture: ComponentFixture<CustomersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
