import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewShiftComponent } from './admin-view-shift.component';

describe('AdminViewShiftComponent', () => {
  let component: AdminViewShiftComponent;
  let fixture: ComponentFixture<AdminViewShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewShiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
