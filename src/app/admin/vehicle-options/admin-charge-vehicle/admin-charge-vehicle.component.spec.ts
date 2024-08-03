import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChargeVehicleComponent } from './admin-charge-vehicle.component';

describe('AdminChargeVehicleComponent', () => {
  let component: AdminChargeVehicleComponent;
  let fixture: ComponentFixture<AdminChargeVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChargeVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminChargeVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
