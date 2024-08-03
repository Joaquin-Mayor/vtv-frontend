import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftUserComponent } from './shift-user.component';

describe('ShiftUserComponent', () => {
  let component: ShiftUserComponent;
  let fixture: ComponentFixture<ShiftUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
