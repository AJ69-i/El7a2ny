import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentRequestsHistoryComponent } from './amendment-requests-history.component';

describe('AmendmentRequestsHistoryComponent', () => {
  let component: AmendmentRequestsHistoryComponent;
  let fixture: ComponentFixture<AmendmentRequestsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmendmentRequestsHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmendmentRequestsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
