import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentRequestsComponent } from './amendment-requests.component';

describe('AmendmentRequestsComponent', () => {
  let component: AmendmentRequestsComponent;
  let fixture: ComponentFixture<AmendmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmendmentRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmendmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
