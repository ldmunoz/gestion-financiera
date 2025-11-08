import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortizationComponent } from './amortization.component';

describe('Amortization', () => {
  let component: AmortizationComponent;
  let fixture: ComponentFixture<AmortizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmortizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmortizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
