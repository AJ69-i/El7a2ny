import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineDaysWorkshopComponent } from './offline-days-workshop.component';

describe('OfflineDaysWorkshopComponent', () => {
  let component: OfflineDaysWorkshopComponent;
  let fixture: ComponentFixture<OfflineDaysWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineDaysWorkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineDaysWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
