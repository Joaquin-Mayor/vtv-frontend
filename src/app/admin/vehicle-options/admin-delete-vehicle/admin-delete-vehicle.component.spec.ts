import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteVehicleComponent } from './admin-delete-vehicle.component';

describe('AdminDeleteVehicleComponent', () => {
  let component: AdminDeleteVehicleComponent;
  let fixture: ComponentFixture<AdminDeleteVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDeleteVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
