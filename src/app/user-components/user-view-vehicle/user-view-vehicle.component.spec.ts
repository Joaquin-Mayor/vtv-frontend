import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewVehicleComponent } from './user-view-vehicle.component';

describe('UserViewVehicleComponent', () => {
  let component: UserViewVehicleComponent;
  let fixture: ComponentFixture<UserViewVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserViewVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserViewVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
