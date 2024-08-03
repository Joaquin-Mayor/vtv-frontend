import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShiftCreateComponent } from './admin-shift-create.component';

describe('AdminShiftCreateComponent', () => {
  let component: AdminShiftCreateComponent;
  let fixture: ComponentFixture<AdminShiftCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminShiftCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminShiftCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
