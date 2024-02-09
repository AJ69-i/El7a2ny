import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineDaysHomeComponent } from './offline-days-home.component';

describe('OfflineDaysHomeComponent', () => {
  let component: OfflineDaysHomeComponent;
  let fixture: ComponentFixture<OfflineDaysHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineDaysHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineDaysHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
