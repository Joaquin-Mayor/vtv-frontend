import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteShiftComponent } from './admin-delete-shift.component';

describe('AdminDeleteShiftComponent', () => {
  let component: AdminDeleteShiftComponent;
  let fixture: ComponentFixture<AdminDeleteShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteShiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDeleteShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
